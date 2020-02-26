import React from 'react'

export default function Nav({menuitems}) {
    return (
    <Nav isOpen={isOpen} onClick={() => setOpen(false)}>
        {menuitems.map(item => {
          if (!item.childpages) {
            return null;
          }

          return item.childpages.length <= 1 ? (
            <Navlink
              key={item.text}
              link={'/' + item.childpages[0].slug.current}
              text={item.text}
            />
          ) : (
            <Navparent
              key={item.text}
              link={'/' + item.childpages[0].slug.current}
              text={item.text}
              childpages={item.childpages}
            />
          );
        })}
      </Nav>
    )
}

function Navlink({link, text}) {
    return (
        <ListItem isHighlighted={link === document.location.pathname}>
            <NavLink to={link} >
                {text}
            </NavLink>
        </ListItem>
    )
}

function Navparent({link, text, childpages}) {
    return (
      <ListItem>
        <NavLink to={link}>
          {text}
        </NavLink>
        <Submenu>
          {childpages.map(child => {
            return (
              <li style={{paddingBottom: '0.5rem'}}>
                <NavLink to={child.slug.current}>
                  {child.title}
                </NavLink>
              </li>
            );
          })}
        </Submenu>
      </ListItem>
    );
  }
  