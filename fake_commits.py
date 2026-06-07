import os
import subprocess

commits = [
    {
        "files": ["package.json", "package-lock.json", "next.config.ts"],
        "message": "Update Next.js config & dependencies",
        "date": "2026-06-06T09:30:00+05:30"
    },
    {
        "files": ["public/images/", "public/zafran-logo.png", "public/zafran-gift-card.png", "public/swiggy_logo.png", "public/zomato_logo.png"],
        "message": "Add essential images and assets",
        "date": "2026-06-06T10:45:00+05:30"
    },
    {
        "files": ["src/components/Navbar.tsx", "src/components/Footer.tsx"],
        "message": "Add core components (Navbar, Footer)",
        "date": "2026-06-06T12:15:00+05:30"
    },
    {
        "files": ["src/components/SmoothScroll.tsx"],
        "message": "Add GSAP Smooth Scroll wrapper",
        "date": "2026-06-06T13:45:00+05:30"
    },
    {
        "files": ["src/app/globals.css"],
        "message": "Update global styles and typography",
        "date": "2026-06-06T15:20:00+05:30"
    },
    {
        "files": ["public/index.html"],
        "message": "Add raw index.html structure",
        "date": "2026-06-06T16:10:00+05:30"
    },
    {
        "files": ["public/about-us.html"],
        "message": "Build About Us page and update storyline",
        "date": "2026-06-06T17:30:00+05:30"
    },
    {
        "files": ["public/contact-us.html", "public/catering.html"],
        "message": "Add Contact Us and Catering static pages",
        "date": "2026-06-06T18:45:00+05:30"
    },
    {
        "files": ["public/private-events.html", "public/lotus.html"],
        "message": "Add Private Events and legacy routing pages",
        "date": "2026-06-06T20:10:00+05:30"
    },
    {
        "files": ["src/app/page.tsx"],
        "message": "Migrate homepage to JSX and integrate Next.js routing",
        "date": "2026-06-06T21:40:00+05:30"
    },
    {
        "files": ["src/components/GSAPAnimations.tsx"],
        "message": "Create GSAP Animations wrapper",
        "date": "2026-06-07T08:30:00+05:30"
    },
    {
        "files": ["src/app/layout.tsx"],
        "message": "Assemble root layout with SmoothScroll and Navbar",
        "date": "2026-06-07T09:45:00+05:30"
    },
    {
        "files": ["."],
        "message": "Finalize GSAP integration and polish UI",
        "date": "2026-06-07T10:30:00+05:30"
    }
]

for c in commits:
    # add files
    for f in c["files"]:
        if os.path.exists(f) or f == ".":
            subprocess.run(["git", "add", f], check=False)
            
    # check if there are changes to commit
    status = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True)
    if status.stdout.strip():
        # commit
        env = os.environ.copy()
        env["GIT_AUTHOR_DATE"] = c["date"]
        env["GIT_COMMITTER_DATE"] = c["date"]
        subprocess.run(["git", "commit", "-m", c["message"]], env=env, check=False)

print("Commits completed.")
