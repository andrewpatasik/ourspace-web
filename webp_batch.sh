#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 input_directory output_directory"
  exit 1
fi

input_dir="$1"
output_dir="$2"

# Ensure the input directory exists
if [ ! -d "$input_dir" ]; then
  echo "Input directory '$input_dir' does not exist."
  exit 1
fi

# Create the output directory if it doesn't exist
if [ ! -d "$output_dir" ]; then
  echo "Output directory '$output_dir' does not exist. Creating..."
  mkdir -p "$output_dir"
fi

# Loop through files in the input directory and convert JPG files to WebP format
for file in "$input_dir"/*.jpg; do
  # Check if the file is a JPG
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    echo "Converting $filename to WebP..."
    cwebp -q 75 "$file" -o "${output_dir}/${filename%.*}.webp"
  else
    echo "Skipping $file (not a JPG)"
  fi
done

echo "Conversion completed."

