import json
from jinja2 import Environment, FileSystemLoader

with open('md/lesson.md', 'r') as f:
    content = f.read()

lines = content.splitlines()
metadata = json.loads(lines[0])

sources = '### Sources<br>'
for source in metadata['sources']:
    sources+=source + "<br>" 
metadata['sources']=sources

markdown = "".join(f"{line}<br>" for line in lines[1:])

env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('./py/lesson_template.html')

data = {
    'subject': metadata['subject'],
    'lesson': metadata['lesson'],
    'title': metadata['title'],
    'author': metadata['author'],
    'video_url': metadata['video_url'],
    'sources': metadata['sources'],
    'markdown': markdown.replace("\\{", "\\\\{").replace("\\}", "\\\\}")
}

output = template.render(data)

output_path = f"html/lessons/{metadata['subject']}.html"
with open(output_path, "w") as file:
    file.write(output)

print(f"Generated HTML file at: {output_path}")