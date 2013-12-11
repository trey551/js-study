document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var elems = document.querySelectorAll('.tooltip-link');

    Array.prototype.forEach.call(elems, function(elem, i) {
        var tool = new tooltip(elem, {
            tooltipAttr: "data-tooltip",
            positionAttr: "data-tooltip-position",
            offset: 5
        });
    });
}

function tooltip(elem, opts) {
    this.elem = elem;
    this.tooltipAttr = opts.tooltipAttr;
    this.tooltipAttrVal = this.elem.getAttribute(this.tooltipAttr);
    this.positionAttr = opts.positionAttr;
    this.positionAttrVal = this.elem.getAttribute(this.positionAttr);
    this.offset = opts.offset;

    this.addEvents();
}

tooltip.prototype.addEvents = function() {
    var self = this;
    this.elem.addEventListener("mouseover", function() {
        self.elemPosition = self.elem.getBoundingClientRect();
        self.heightElem = self.elem.clientHeight;
        self.widthElem = self.elem.clientWidth;
        self.createTooltip();
    });
    this.elem.addEventListener("mouseout", function() {
        document.body.removeChild(self.createdTooltip);
    });
}


tooltip.prototype.createTooltip = function() {
    this.createdTooltip = document.createElement('div');
    document.body.appendChild(this.createdTooltip);
    this.createdTooltip.classList.add("tooltip");
    this.createdTooltip.innerHTML = this.tooltipAttrVal;
    this.h = this.createdTooltip.clientHeight;
    this.w = this.createdTooltip.clientWidth;
    this.createdTooltip.style.position = "absolute";
    this.windowW = window.innerWidth;
    this.windowH = window.innerHeight;
    this.r = this.windowW - this.elemPosition.left;
    this.b = this.windowH - this.elemPosition.bottom;

    this.errLeft = this.elemPosition.left - this.w;
    this.errRight = this.r - this.w;
    this.errTop = this.elemPosition.top - this.h;
    this.errBottom = this.b - this.h;

    switch (this.positionAttrVal) {
        case "top":
            this.top();
            break;
        case "left":
            this.left();
            break;
        case "bottom":
            this.bottom();
            break;
        case "right":
            this.right();
            break;
    }
}

tooltip.prototype.top = function() {
    if (this.errLeft > 0 && this.errRight > 0 && this.errTop < 0) {
        this.createdTooltip.style.top = this.elemPosition.top + this.h + this.offset*2 + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    } else if (this.errLeft < 0 && this.errBottom > 0 && this.errTop > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.left - this.w + "px";
    } else if (this.errTop > 0 && this.errRight < 0 && this.errTop > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.left - this.w - this.offset*2 + "px";
    } else {
        this.createdTooltip.style.top = this.elemPosition.top - this.h + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    }
}
tooltip.prototype.left = function() {
    if (this.errLeft > 0 && this.errRight > 0 && this.errTop < 0) {
        this.createdTooltip.style.top = this.elemPosition.bottom + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    } else if (this.errLeft < 0 && this.errBottom > 0 && this.errTop > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.right + this.offset + "px";
    } else if (this.errLeft > 0 && this.errBottom < 0 && this.errRight > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - this.h + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    } else {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.left - this.w - this.offset + "px";
    }
}
tooltip.prototype.bottom = function() {
    console.log(this.errRight, this.errLeft, this.errTop, this.errBottom);
    if (this.errTop > 0 && this.errRight < 0 && this.errTop > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.left - this.w - this.offset + "px";
    } else if (this.errLeft < 0 && this.errBottom > 0 && this.errTop > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.right + this.offset + "px";
    } else if (this.errLeft > 0 && this.errBottom < 0 && this.errRight > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - this.h + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    } else {
        this.createdTooltip.style.top = this.elemPosition.bottom + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    }
}
tooltip.prototype.right = function() {
    if (this.errLeft > 0 && this.errRight > 0 && this.errTop < 0) {
        this.createdTooltip.style.top = this.elemPosition.bottom + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    } else if (this.errTop > 0 && this.errRight < 0 && this.errTop > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.left - this.w - this.offset + "px";
    } else if (this.errLeft > 0 && this.errBottom < 0 && this.errRight > 0) {
        this.createdTooltip.style.top = this.elemPosition.top - this.h + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.w / 2) - (this.widthElem / 2)) + "px";
    } else {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.h / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.right + this.offset + "px";
    }
}

