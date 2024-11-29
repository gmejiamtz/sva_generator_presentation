index.html: slides.md
	pandoc -t revealjs -s -o $@ $< \
	-V revealjs-url=https://unpkg.com/reveal.js/ \
	--include-in-header=slides.css -V theme=black \
	--include-after-body=dynamic_navigation.js \
	--slide-level 3

clean:
	rm index.html