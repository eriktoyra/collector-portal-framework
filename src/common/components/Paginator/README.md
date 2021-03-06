# Paginator

This component allows a user to paginate an arbitrary list, with user defined items in the middle. It's meant to simply be used to slice an array of items for presentation, and can be used for server-side or local pagination.

## Props

| Name              | Required | Type                 | Should contain                                                           |
| ----------------- | -------- | -------------------- | ------------------------------------------------------------------------ |
| `numberOfItems`   | ✓        | number               | Length of item array                                                     |
| `pageSize`        | ✓        | number               | Number of items per page                                                 |
| `activePage`      | ✓        | number               | Current page to show as active                                           |
| `numbersInMiddle` | ✓        | number               | Number of items in the middle of paginator. **Should be an odd number!** |
| `onChange`        | ✓        | `activePage => void` | Takes in a page number, which is used with pageSize to get your slice    |

## Example

```jsx
const originalList = ['Item 1'...'Item 100']; // pseudo code
const activePage = 2;
const pageSize = 10;

const paginatedList = originalList.slice((activePage - 1) * pageSize, activePage * pageSize);

<div>
    <Paginator
        onChange={this.handleChange}
        numbersInMiddle={5}
        pageSize={pageSize}
        length={originalList.length}
    />

    <Items>
        {paginatedList.map(item =>
            <Item>item</Item>
        )}
    </Items>
</div>
```
