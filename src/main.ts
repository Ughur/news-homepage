import './style.css';
import './assets/fonts/fonts.css';

class MobileMenuController {
  private elements: Record<string, HTMLElement>;

  constructor() {
    
    this.elements = [
      'mobile-menu',
      'mm-open-button',
      'mm-close-button',
      'overlay',
    ].reduce((acc, id) => {
      const element = document.getElementById(id);
      if (element) acc[id] = element;
      return acc;
    }, {} as Record<string, HTMLElement>);


    this.bindEvents();
  }

  private bindEvents(): void {
    const {
      'mm-open-button': open,
      'mm-close-button': close,
      overlay,
    } = this.elements;

  
    open?.addEventListener('click', () => this.toggle(true));

    
    [close, overlay].forEach((el) =>
      el?.addEventListener('click', () => this.toggle(false))
    );
  }

  private toggle(isOpen: boolean): void {
    const { 'mobile-menu': menu, overlay } = this.elements;

    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    menu?.classList.toggle('mobile-menu-open', isOpen);
    menu?.classList.toggle('mobile-menu-close', !isOpen);
    overlay?.classList.toggle('hidden', !isOpen);
  }
}

document.addEventListener('DOMContentLoaded', () => new MobileMenuController());
