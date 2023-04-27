import React from 'react';
import './footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer__description">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
        <hr className="footer__separator"></hr>
        <div className="footer__copy">
          2022 — <strong>ShipIT</strong>
        </div>
    </footer>
  );
};

export default Footer;
