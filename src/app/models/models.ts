export interface Circle {
    value: number;
    color: string;
}
export class SvgProperties {
    public colors: string[];
    public circle: {
        count: number,
        color: string,
        dashoffset: string,
        dasharray: string
    }[] = [];
    public full_count: number;
    public parts_count: number[];
    public title = '';
    public count_title: string;
    public title_type: number;

    constructor(partsCount: number[], colors?: string[], fullCount?: number, titleType?: number, title?: string) {
        const sumParts = partsCount.reduce((a, b) => {
            return a + b;
        }
        );

        this.parts_count = partsCount;

        if (fullCount) {
            this.full_count = fullCount;
        } else {
            this.full_count = sumParts;
        }

        this.titleSet(sumParts, title, titleType);

        this.colors = [];
        for (const i in this.parts_count) {
            if (colors) {
                if (colors[i]) {
                    this.colors[i] = colors[i];
                } else if (colors[0]) {
                    this.colors[i] = colors[0];
                } else {
                    this.colors[i] = '#000000';
                }
            }
        }
        this.createCircles();
    }

    public titleSet(sumParts, title?, title_type?) {
        if (this.full_count === sumParts) {
            this.count_title = sumParts.toString();
        } else {
            this.count_title = `${sumParts}/${this.full_count}`;
        }
        if (title_type) {
            switch (title_type) {
                case 1:
                    this.count_title = `${sumParts}/${this.full_count}`;
                    this.title = (Math.round(sumParts / 1000 * 10) / 10).toString();
                    break;
                case 2:
                    this.count_title = `${sumParts}/${this.full_count}`;
                    this.title = '';
                    break;
                case 3:
                    this.title = this.full_count.toString();
                    this.count_title = title;
                    break;
                case 4:
                    this.title = title;
                    this.count_title = this.full_count.toString();
                    break;
            }
        }
    }

    public createCircles() {
        const percent = 100 / this.full_count;
        for (const i in this.parts_count) {
            if (true) {
                let dashoffset;
                const dasharray = percent * this.parts_count[i];
                if (i === '0') {
                    dashoffset = 25;
                } else {
                    dashoffset = Number(this.circle[Number(i) - 1].dashoffset) + 100 - this.parts_count[Number(i) - 1] * percent;
                }


                this.circle.push(
                    {
                        count: this.parts_count[i],
                        color: this.colors[i],
                        dashoffset: dashoffset,
                        dasharray: `${dasharray} ${100 - dasharray}`
                    });
            }
        }
    }
}
