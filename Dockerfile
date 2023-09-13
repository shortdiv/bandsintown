# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.2.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"
LABEL fly_gh_sha="d4600e4ed756910ea943f63cb48a26751a5ce576"
LABEL fly_gh_event_name="push"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y build-essential pkg-config python-is-python3 nodejs npm

RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .
RUN rm -Rf ./supabase

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000

COPY start.sh ./
RUN chmod +x ./start.sh
ENTRYPOINT [ "./start.sh" ]

