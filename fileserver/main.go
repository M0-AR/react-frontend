package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./index.html")
	})
	//http.Handle("/", http.FileServer(http.Dir("./")))
	log.Fatal(http.ListenAndServe(":3001", nil))
}
