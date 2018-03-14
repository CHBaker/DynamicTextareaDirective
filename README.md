# DynamicTextareaDirective
Attribute Directive that changes the size of the textarea dynamically with optional min/max height properties

## Installation

To install this library, run:

```bash
$ npm install dynamic-textarea-directive --save
```

## Using just the directive

```typescript
...
import { DynamicTextAreaDirective } from 'dynamic-textarea-directive';

@NgModule({
  declarations: [
    DynamicTextAreaDirective
  ],
  imports: [
    ...
  ],
  providers: [
      ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Attach the directive to a <textarea> tag, or a tag with a nested <textarea> (for electron):

```xml
    <textarea appDynamicTextarea></textarea>
```

and your Textarea will grow dynamically! If you want max/min height set on it, bind to them and pass the number without 'px':

```xml
    <textarea
        appDynamicTextarea
        [minHeight]='100'
        [maxHeight]='150'
    >
    </textarea>
```

depending on the browser and default styles, the heights may very based on the textareas border/padding/other. A plain text input varies by about 8 pixels, so play around with it to find the right height depending on the other styles inpact.

## Repo

https://github.com/CHBaker/Instant-Messages

## License

MIT © [Charles Hudson Baker](mailto:charlesprobaker@gmail.com)
