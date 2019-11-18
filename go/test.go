package main

import (
	"fmt"
	"image"
	"image/png"
	"os"

	"github.com/kbinani/screenshot"
)

func main() {
	x := 0
	y := 0
	w := 10
	h := 10
	rect := image.Rect(x, y, x+w, y+h)
	img, err := screenshot.CaptureRect(rect)
	bounds := img.Bounds()
	var histogram [16][4]int
	for y := bounds.Min.Y; y < bounds.Max.Y; y++ {
		for x := bounds.Min.X; x < bounds.Max.X; x++ {
			r, g, b, a := img.At(x, y).RGBA()
			// A color's RGBA method returns values in the range [0, 65535].
			// Shifting by 12 reduces this to the range [0, 15].
			histogram[r>>12][0]++
			histogram[g>>12][1]++
			histogram[b>>12][2]++
			histogram[a>>12][3]++
		}
	}
	// Print the results.
	fmt.Printf("%-14s %6s %6s %6s %6s\n", "bin", "red", "green", "blue", "alpha")
	for i, x := range histogram {
		fmt.Printf("0x%04x-0x%04x: %6d %6d %6d %6d\n", i<<12, (i+1)<<12-1, x[0], x[1], x[2], x[3])
	}
	if err != nil {
		panic(err)
	}

	fileName := fmt.Sprintf("1.png")
	file, _ := os.Create(fileName)
	defer file.Close()
	png.Encode(file, img)

}
