import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'smart-label',
  styleUrl: 'smart-label.css'
})
export class SmartLabel {

  @Prop() text;
  @Prop() altText;

  copy(event: UIEvent) {
    var node= event.currentTarget as HTMLElement;
    var allInputs = node.parentElement.getElementsByClassName('smart-label-shadow-input');
    if (allInputs && allInputs.length) {
      let shadowInput = allInputs[0]      as HTMLInputElement;
      shadowInput.select();
      document.execCommand('Copy');
    } 
  }

  render() {
    return ([
      <span>
        {this.text}
      </span>,
      <a class="smart-label-copy" onClick={(event: UIEvent) => this.copy(event)}>
        <img title={this.altText} src="assets/icon/copy.svg" />
        <input class="smart-label-shadow-input" type="text" value={this.text.trim()} />
      </a>
    ]
    );
  }
}
