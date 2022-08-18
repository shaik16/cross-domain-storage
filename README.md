## Embedding on other static sites

Insert the below html script inside Head tag

```html
<script
  id="affiliate-script"
  src="https://shaik16.github.io/cross-domain-storage/index.js"
  data-iframe-origin="http://localhost:8080/login"
  data-affiliate-slug="listen_notes"
  type="text/javascript"
  async
></script>
```

Note:
data-iframe-origin should be the origin which contains message reader ex: studio.adorilabs.com
data-affiliate-slug can be your choice of slug
