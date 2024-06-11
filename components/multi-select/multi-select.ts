class MultiSelect extends HTMLElement {
  private _options: HTMLElement[] = [];
  private _selectedItems: Set<string> = new Set();
  private _listVisible: boolean = false;
  private _multiSelectField: HTMLDivElement | null = null;
  private _multiSelectList: HTMLDivElement | null = null;
  private _tagsContainer: HTMLDivElement | null = null;
  private _arrow: SVGElement | null = null;

  constructor() {
    super();

    window.addEventListener('DOMContentLoaded', () => {
      // we need to wait for the options to loaded and than init the component
      // for some reason DOMContentLoaded event rises twice, so we check if the component is already initialized
      if(!this._multiSelectField) {
        this.init();
      }
    });
  }

  init() {
    // Assuming that all children are options. Store them
    // get options from all nested children that has data-value attribute
    this._options = Array.from(this.querySelectorAll('[multi-select-item]'));

    // Clear our dropdown from all children
    // this.replaceChildren();
    
    // Create label
    const label = document.createElement('span');
    label.classList.add('multi-select-label');
    label.textContent = this.getAttribute('label') || 'Select';
    this.appendChild(label);

    // Create multi-select field container
    this._multiSelectField = document.createElement('div');
    this._multiSelectField.classList.add('multi-select-field');
    this._multiSelectField.setAttribute('tabindex', '0'); // Make it focusable
    this.appendChild(this._multiSelectField);

    this._multiSelectField.addEventListener('click', this._toggleList);

    window.addEventListener('click', (e) => {
      if (e.target !== this._multiSelectField) {
        this._closeList();
      }
    });
    
    // Create the tags container
    this._tagsContainer = document.createElement('div');
    this._tagsContainer.classList.add('multi-select-tags-container');
    this._multiSelectField.appendChild(this._tagsContainer);
    
    // Create the arrow
    this._arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._arrow.classList.add('multi-select-arrow');
    this._arrow.setAttribute('width', '12');
    this._arrow.setAttribute('height', '7');
    this._arrow.setAttribute('viewBox', '0 0 12 7');
    this._arrow.setAttribute('fill', 'none');
    this._arrow.innerHTML = `<path d="M1 1L6.00081 5.58L11 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    this._multiSelectField.appendChild(this._arrow);
    
    // Create options list
    this._multiSelectList = this.querySelector('.multi-select-list')!;
    this._multiSelectList.style.display = 'none';

    this._initOptionList();

    // Update tags and options display
    this._updateTags();

    this.style.display = 'block';
  }

  private _initOptionList = () => {
    this._options.forEach(option => {
      option.addEventListener('click', (e: MouseEvent) => {
        if((e.target as HTMLElement)?.tagName === 'INPUT') {
          this._handleOptionClick(option.getAttribute('data-value') || '');
        }
      });
    });
  };

  private _toggleList = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    this._listVisible = !this._listVisible;
    this._multiSelectList!.style.display = this._listVisible ? 'flex' : 'none';
    this._arrow!.style.transform = this._listVisible ? 'rotate(180deg)' : 'rotate(0deg)';
  };

  private _closeList = () => {
    this._listVisible = false;
    this._multiSelectList!.style.display = this._listVisible ? 'flex' : 'none';
    this._arrow!.style.transform = this._listVisible ? 'rotate(180deg)' : 'rotate(0deg)';
  };

  private _handleOptionClick = (value: string) => {
    const option = this._options.find(option => option.getAttribute('data-value') === value);
    const checkbox = option?.querySelector('input[type="checkbox"]') as HTMLInputElement;

    if (this._selectedItems.has(value)) {
      this._selectedItems.delete(value);
      option?.classList.remove('multi-select-item-selected');
      checkbox.checked = false;
    } else {
      this._selectedItems.add(value);
      option?.classList.add('multi-select-item-selected');
      checkbox.checked = true;
    }

    var event = new Event('input', {
      'bubbles': true,
      'cancelable': true
    });

    checkbox.dispatchEvent(event);

    this._updateTags();
  };

  private _updateTags = () => {
    this._tagsContainer!.innerHTML = ''; // Clear current tags
  
    let availableWidth = this._tagsContainer!.clientWidth; // Get the available width of the container
    let usedWidth = 0;
    let itemCount = 0;
  
    // Function to create a 'more' tag
    const createMoreTag = (count: number) => {
      const moreTag = document.createElement('div');
      moreTag.classList.add('multi-select-tag');
      moreTag.textContent = `${count} more`;
      return moreTag;
    };
  
    // Temporarily add a 'more' tag to reserve space for it
    const moreTag = createMoreTag(0);
    this._tagsContainer!.appendChild(moreTag);
    let moreTagWidth = moreTag.offsetWidth; // Calculate its width
    this._tagsContainer!.removeChild(moreTag); // Remove it for now
  
    // Reduce the available width by the 'more' tag width plus some margin
    // availableWidth -= (moreTagWidth + 5); // assuming 10px margin
  
    this._selectedItems.forEach((value) => {
      const tag = document.createElement('div');
      tag.classList.add('multi-select-tag');
      tag.setAttribute('data-value', value);
      tag.textContent = value;
      tag.style.visibility = 'hidden'; // Hide the tag
  
      this._tagsContainer!.appendChild(tag);
      // After appending, measure the width
      const tagWidth = tag.offsetWidth;
      usedWidth += tagWidth;
  
      const occupiedWidth = this._selectedItems.size > itemCount + 1 ? moreTagWidth + 5 : 0;

      if (usedWidth > (availableWidth - occupiedWidth)) {
        // If we run out of space, remove the tag and break the loop
        this._tagsContainer!.removeChild(tag);
        return;
      }

      tag.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this._handleOptionClick(value);
        this._closeList();
      });
  
      // Make the tag visible and increment count
      tag.style.visibility = 'visible';
      itemCount++;
    });
  
    // Add the 'more' tag if there are more items than we have space for
    if (this._selectedItems.size > itemCount) {
      const extraCount = this._selectedItems.size - itemCount;
      const moreTagFinal = createMoreTag(extraCount);
      this._tagsContainer!.appendChild(moreTagFinal);
    }
  };
  
  
}

customElements.define('multi-select', MultiSelect);
