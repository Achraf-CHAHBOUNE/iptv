import os
import shutil
from PIL import Image

def process_images(source_folder, destination_folder):
    for root, dirs, files in os.walk(source_folder):
        for file in files:
            source_file_path = os.path.join(root, file)
            relative_path = os.path.relpath(source_file_path, source_folder)
            dest_file_path = os.path.join(destination_folder, relative_path)
            
            # Ensure the destination directory exists
            dest_dir = os.path.dirname(dest_file_path)
            if not os.path.exists(dest_dir):
                os.makedirs(dest_dir)
            
            if file.lower().endswith('.png'):
                # Convert the PNG image to WebP
                webp_file_path = os.path.splitext(dest_file_path)[0] + '.webp'
                with Image.open(source_file_path) as image:
                    image.save(webp_file_path, 'webp')
                print(f"Converted: {source_file_path} -> {webp_file_path}")
            else:
                # Copy the existing WebP file to the destination
                shutil.copy2(source_file_path, dest_file_path)
                print(f"Copied: {source_file_path} -> {dest_file_path}")

if __name__ == "__main__":
    source_folder = "assets/images"       # Source folder path
    destination_folder = "images"         # Destination folder path
    process_images(source_folder, destination_folder)
