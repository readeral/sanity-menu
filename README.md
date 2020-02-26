# sanity-menu
A collection of files outlining my approach to menus in Sanity

**note** Although most of this is code that has been used in production - assume it is pseudo-code, as there is no styling, and the `<NavLink>` component will need the appropriate alternative component/props for your preferred routing library/solution.

## Single Level Nested Menu
The associated files for this approach are singleLevelMenu.js (sanity schema) and singleLevelMenuComponent.js (React). Feel free to adapt to your library/framework of choice - it's in react only because that's all I develop with.

Single level nest menu works by assuming all Top-level menu items are containers for one or more child pages, which then resolve like this:
- If a menu item only has one child, then the menu item will link directly to that child page.
- If a menu item has more than one child, it will render a drop down containing all the child pages.

## Multi-level Nested Menu
The associated file(s) for this approach are nestedMenu.js (sanity schema) and a forthcoming nestedMenuComponent.js (React). The approach for the sanity schema is a self-referential schema type. To limit the number of nested menus would require a slightly different approach.

Details on Component coming soon with the component itself.