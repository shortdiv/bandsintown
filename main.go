package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("reading GH INFO:")
	GH := os.Getenv("GITHUB_SHA")
	EVENT := os.Getenv("GITHUB_EVENT_NAME")
	Actions := os.Getenv("GITHUB_ACTIONS")
	fmt.Printf("Is using actions:%s", Actions)
	fmt.Printf("With the following event:%s", EVENT)
	fmt.Printf("With the following sha %s", GH)
}
