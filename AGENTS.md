<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio content is centralized in the browser-safe data module and supplied image assets use CDN pointers, keeping unverified work out of presentation code.
- Reel belts use native scrolling with three identical copies and a pure loop-position helper, preserving manual navigation while allowing page-scroll motion.
- Keep unused React Three Fiber scene objects in createElement form rather than JSX: source-attribute injection is incompatible with the 3D renderer.
