DOM-based-routing
=================

##Description
I use this technique when i'm developing larger web applications but this could also be applied to regular web sites. The technique adds simplicity, and makes it easier for the team to navigate through your javascript code.

This code is based on Paul Irish's "Markup-based Unobtrusive Comprehensive DOM-ready Execution".

##Usage
Just add your controller and, if needed, an action to the body tag.

####The following body tag will fire:
`<body data-controller="users" data-action="show">`

- namespace.common.init
    - Common JS like navigation, lightbox etc.
- namespace.users.init
    - Common JS for users section.
- namespace.users.show
    - Specific JS when showing users.
- namespace.common.finalize
    - Finalize JS like.. whatever, remove it if you don't need it.

####Without data-action the util will fire
`<body data-controller="users">`

- namespace.common.init
    - Common JS like navigation, lightbox etc.
- namespace.users.init
    - Common JS for users section.
- namespace.common.finalize
    - Finalize JS like.. whatever, remove it if you don't need it.

####NOTE: This technique could also be used on id="" and class="".
`<body id="users" class="show">`