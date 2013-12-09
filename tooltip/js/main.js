document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var elems = document.querySelectorAll('.tooltip-link');

    Array.prototype.forEach.call(elems, function(elem, i) {
        var tool = new tooltip(elem, {
            tooltipAttr: "data-tooltip",
            positionAttr: "data-tooltip-position"
        });
    });
}

function tooltip(elem, opts) {
    this.elem = elem;
    this.elemPosition = this.elem.getBoundingClientRect();
    this.tooltipAttr = opts.tooltipAttr;
    this.tooltipAttrVal = this.elem.getAttribute(this.tooltipAttr);
    this.positionAttr = opts.positionAttr;
    this.positionAttrVal = this.elem.getAttribute(this.positionAttr);
    this.heightElem = this.elem.clientHeight;
    this.widthElem = this.elem.clientWidth;

    this.showTooltip();
    this.hideTooltip();
}

tooltip.prototype.showTooltip = function() {
    var self = this;
    this.elem.addEventListener("mouseover", function() {
        self.createTooltip();
    });
}

tooltip.prototype.hideTooltip = function() {
    var self = this;
    this.elem.addEventListener("mouseout", function() {
        document.body.removeChild(self.createdTooltip);
    });
}

tooltip.prototype.createTooltip = function() {
    this.createdTooltip = document.createElement('div');
    document.body.appendChild(this.createdTooltip);
    this.createdTooltip.classList.add("tooltip");
    this.createdTooltip.style.position = "absolute";
    // this.tooltipPosition();
    this.createdTooltip.innerHTML = this.tooltipAttrVal;
    this.heightTooltip = this.createdTooltip.clientHeight;
    this.widthTooltip = this.createdTooltip.clientWidth;

    if (this.positionAttrVal == "top") {
        this.createdTooltip.style.top = this.elemPosition.top - this.heightTooltip + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.widthTooltip / 2) - (this.widthElem / 2)) + "px";
    } else if (this.positionAttrVal == "left") {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.heightTooltip / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.left - this.widthTooltip -  5 + "px";
    } else if (this.positionAttrVal == "bottom") {
        this.createdTooltip.style.top = this.elemPosition.bottom + "px";
        this.createdTooltip.style.left = this.elemPosition.left - ((this.widthTooltip / 2) - (this.widthElem / 2)) + "px";
    } else if (this.positionAttrVal == "right") {
        this.createdTooltip.style.top = this.elemPosition.top - ((this.heightTooltip / 2) - (this.heightElem / 2)) + "px";
        this.createdTooltip.style.left = this.elemPosition.right +  5 + "px";
    }
}