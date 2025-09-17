# hw25-shopping-list
Create a shopping list application that demonstrates advanced DOM manipulation, event delegation, and data management.

## Setup

Create two files: *shopping_list.html* and *shopping_list.js*

## HTML Requirements

You must create your own HTML structure with the following elements:

Required Elements:

-   A container div to hold all content
-   A heading (h1) for "Shopping List"
-   An input field with id "item-input" for entering new items
-   A button with id "add-btn" to add items
-   A button with id "clear-completed" to clear completed items
-   An unordered list with id "shopping-list" to display items
-   A stats section with id "stats" containing:
-   Total items count (span with id "total-count")
-   Completed items count (span with id "completed-count")
-   Remaining items count (span with id "remaining-count")

Styling Requirements:

-   Style your shopping list to look clean and professional
-   Make completed items visually distinct (strikethrough, different color, etc.)
-   Style buttons and input fields appropriately
-   Add hover effects and transitions if desired
-   Make it responsive for different screen sizes (OPTIONAL)

**Note:** You are responsible for creating all HTML structure and CSS styling. Use the lesson materials and examples as reference, but create your own unique design.

## JavaScript Requirements

Your *shopping_list.js* file should implement the following functionality:

1.  Add Items
    -   Add items with just the name
    -   When adding the item you should also add a button to complete the task
    -   Clear input after adding
    -   Handle empty inputs gracefully

2.  Item Management
    -   Mark items as complete/incomplete(optional) (add something to indicate the task is complete)
    -   Delete items (clear list button, removes all items and clears stats)
    -   Use event delegation for dynamic buttons

3.  List Operations
    -   Clear all completed items (OPTIONAL)
    -   Update statistics (total, completed, remaining)

4.  Host
    -   Host on github pages

5.  BONUS
    -   Store the items locally, so whenever you leave the page you don't lose all you items
    -   Consider creating an Object with the key = item name, value = complete status.