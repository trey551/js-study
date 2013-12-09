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
    this.tooltipPosition();
    this.createdTooltip.innerHTML = this.tooltipAttrVal;
}

tooltip.prototype.tooltipPosition = function() {
    if (this.positionAttrVal == "top") {
        this.createdTooltip.style.top = this.elemPosition.top  + "px";
        this.createdTooltip.style.left = this.elemPosition.left + "px";
    } else if (this.positionAttrVal == "left") {
        this.createdTooltip.style.top = this.elemPosition.top + "px";
        this.createdTooltip.style.left = this.elemPosition.left + "px";
    } else if (this.positionAttrVal == "bottom") {
        this.createdTooltip.style.top = this.elemPosition.bottom + "px";
        this.createdTooltip.style.left = this.elemPosition.left + "px";
    } else if (this.positionAttrVal == "right") {
        this.createdTooltip.style.top = this.elemPosition.top + "px";
        this.createdTooltip.style.left = this.elemPosition.right + "px";
    }
}