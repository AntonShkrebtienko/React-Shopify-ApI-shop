"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./pagination.css");
const Pagination = (props) => {
    const { totalProducts, productsPerPage, setCurrentPage } = props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return ((0, jsx_runtime_1.jsx)("nav", Object.assign({ className: 'pagination-nav' }, { children: (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "pagination-nav__list" }, { children: pageNumbers.map(pageNumber => {
                return (0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'page-item' }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "!#", className: 'page-link', onClick: (e) => {
                            e.preventDefault();
                            setCurrentPage(pageNumber);
                        } }, { children: pageNumber }), void 0) }), pageNumber);
            }) }), void 0) }), void 0));
};
exports.default = Pagination;
