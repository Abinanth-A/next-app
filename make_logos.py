from PIL import Image

def process_logo(input_path, output_path, target_bg):
    img = Image.open(input_path).convert('RGBA')
    width, height = img.size
    pixels = img.load()
    bg_color = (30, 30, 30)
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            dist = ((r - bg_color[0])**2 + (g - bg_color[1])**2 + (b - bg_color[2])**2)**0.5
            
            if dist < 2:
                pixels[x, y] = target_bg + (255,)
            elif dist < 80:
                factor = dist / 80.0
                # A better blend might be needed, but let's try this linear one
                new_r = int(r * factor + target_bg[0] * (1 - factor))
                new_g = int(g * factor + target_bg[1] * (1 - factor))
                new_b = int(b * factor + target_bg[2] * (1 - factor))
                pixels[x, y] = (new_r, new_g, new_b, 255)
    img.save(output_path)

input_img = 'C:/Users/abina/.gemini/antigravity/brain/0fb4b130-04a4-4242-ac5b-7aa6f75a410e/.user_uploaded/media_1791126584983.png'
process_logo(input_img, 'logo-light.png', (250, 249, 245))
process_logo(input_img, 'logo-dark.png', (22, 25, 28))
