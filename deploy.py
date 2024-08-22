import subprocess
import time
from datetime import datetime

# Define the commands to be executed
commands = [
    # "npx astro-i18next generate",
    # "built_date.cmd",
    "npm run astro build",
    "sync.cmd",
    #"rmdir /s /q src\pages\en"
]

# Record the start time
start_time = time.time()
start_time_formatted = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Define ANSI escape sequence for color (e.g., 32 is for green)
color_start = "\033[38;2;255;191;0m" 
color_end = "\033[0m"

# Echo the start time of the deployment process
print(f"{color_start}\nDeployment process started at {start_time_formatted}{color_end}")
print(f"""
Executing following commands:
  → "npx astro-i18next generate"
  → "built_date.cmd"
  → "npm run astro build"
  → "sync.cmd"
  → "rmdir /s src\pages\en"
""")

# Record the start time
start_time = time.time()

# Execute each command
for command in commands:
    subprocess.run(command, shell=True)

# Record the end time
end_time = time.time()

# Calculate the total duration
total_duration = end_time - start_time


# Display the result with color
print(f"{color_start}\nTotal time (i18n, build, upload) taken: {total_duration:.2f} seconds{color_end}")
