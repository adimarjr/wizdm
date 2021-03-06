<!-- toc: reference.json -->

# Thumbnail

[Go to the API Reference](#api-reference)
A multi-sized thumbnail component with ripple effect animation on them. You can use in your application to display rich and interactive state for activity. 


## Usage example
```html
 <wm-thumbnail  [name]="Loading..." [src]="assets/loader.png" size="md">
   <wm-spinner></wm-spinner>
 </wm-thumbnail>

```
**wm-thumbnail** takes name attribute for displaying an interactive text that describes to the user's of your application the ongoing activity within the element. Also uses the **src** attribute you use to load the image for the thumbnail tag.
The size attribute provides responsive customization which are: 


```typescript
export type ThumbnailSize = 'xs'|'sm'|'md'|'lg';

```


## Attributes

| **Properties**             | **Description**                                                        |
| :------------------------- | :--------------------------------------------------------------------- |
| @Input() src: string       | Use this attribute to insert the main content in the thumbnail element |
| @Input() name: string      | Use attribute to provide title for the thumbnail item                  |
| @Input() size: string      | Select from the variations from thumbnail size options                 |
| @Input() selected: boolean | Use attriubte to mark the selected item when in active state           |

&nbsp;

# API Reference
```typescript
import { ThumbnailModule } from '@wizdm/elements/logo';

```
---


->
[Continue Next ⮕](docs/toc?go=next) 
->  

  
