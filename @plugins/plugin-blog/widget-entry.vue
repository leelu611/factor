<template>
  <div class="post-entry">
    <factor-highlight-code>
      <div v-formatted-text="rendered" />
    </factor-highlight-code>
  </div>
</template>
<script lang="ts">
import { renderMarkdown } from "@factor/api/markdown"
import { stored } from "@factor/api"
import { factorHighlightCode } from "@factor/plugin-highlight-code"

export default {
  components: {
    factorHighlightCode,
  },
  props: {
    postId: { type: String, default: "" },
  },
  computed: {
    post(this: any) {
      return stored(this.postId) || {}
    },
    variables(this: any) {
      const vars: Record<string, string> = {}
      this.post.images.forEach((imageId: string) => {
        const img = stored(imageId) || {}
        vars[imageId] = img.url || ""
      })
      return vars
    },
    rendered(this: any) {
      return renderMarkdown(this.post.content, {
        variables: true,
      })
    },
  },
}
</script>
<style lang="less">
.plugin-blog {
  .post-entry {
    font-size: 1.2em;
    line-height: 1.6em;
    margin-bottom: 1em;
    max-width: 48rem;
    margin: 0 auto;
    p,
    ol,
    ul {
      line-height: 1.7;
    }

    p {
      margin: 0 0 1.5em 0;
    }

    h1,
    h2,
    h3 {
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 0.4em;
    }

    h4,
    h5,
    h6 {
      font-weight: 600;
      line-height: 1.4em;
      margin-bottom: 0.5em;
    }

    h1 {
      font-size: 1.8em;
      line-height: 1.1;
    }

    h2 {
      font-size: 1.5em;
      line-height: 1.1;
    }

    h3 {
      font-size: 1.3em;
      line-height: 1.1;
    }

    h4 {
      font-size: 1.1em;
    }

    h5 {
      font-weight: 500;
      font-size: 1em;
    }

    h6 {
      font-weight: 300;
      font-size: 1em;
    }

    div > ul {
      margin-bottom: 2em;
    }

    ol,
    ul {
      padding-left: 1.5em;
      margin-bottom: 1.5em;
    }

    hr {
      margin: 1em 0;
    }

    figure {
      margin: 2em 0;
      text-align: center;

      figcaption {
        margin-top: 0.5em;
        opacity: 0.3;
        text-align: center;
      }

      > a,
      > img {
        text-align: center;
        display: inline-block;
      }

      img {
        max-height: 60vh;
        box-shadow: 0 0 0 1px rgba(73, 86, 105, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease-in-out;
        border-radius: 5px;

        &:hover {
          box-shadow: 0 0 0 1px rgba(73, 86, 105, 0.15), 0 1px 15px 0 rgba(0, 0, 0, 0.1);
          transform: translateY(-1px);
        }
      }
    }

    img {
      max-width: 100%;
    }

    table {
      margin: 0.5em 0 1.4em;
      width: 100%;
      border: 1px solid #e7ebed;

      tr:nth-child(even) {
        background: #f3f5fa;
      }

      th {
        font-weight: 600;
        border-bottom: 1px solid #e7ebed;
      }

      th,
      td {
        padding: 0.5em;
      }
    }

    .embed-responsive {
      margin: 0.5em 0;

      @media (max-width: 767px) {
        position: relative;
        padding-bottom: 56.25%;
        /* 16:9 */
        padding-top: 25px;
        height: 0;
      }

      iframe {
        width: 100%;

        @media (max-width: 767px) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    blockquote {
      margin: 1em 0;
      padding: 0.5em 0 0.5em 1.5em;
      border-left: 5px solid var(--color-primary, #ff0076);
      font-style: italic;

      @media (max-width: 767px) {
        margin: 0.5em 0;
      }

      p {
        display: inline;
      }
    }
  }
}
</style>
