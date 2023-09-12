package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("reading GH SHAS")
	GH := os.Getenv("GITHUB_SHA")
	fmt.Println(GH)
}
