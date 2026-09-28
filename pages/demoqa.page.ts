import type { Locator, Page } from '@playwright/test';

export class DemoQaHomePage {
    constructor(private readonly page: Page) { }

    async goto() {
        await this.page.goto('/');
    }

    async openElements() {
        await this.page.getByRole('link', { name: 'Elements' }).click();
    }
}

export class DemoQaElementsPage {
    constructor(private readonly page: Page) { }

    async openCheckbox() {
        await this.page.getByRole('link', { name: 'Check Box' }).click();
    }
}

export class DemoQaCheckboxPage {
    constructor(private readonly page: Page) { }

    get homeLabel(): Locator {
        return this.page.getByText('Home', { exact: true });
    }

    get selectionResult(): Locator {
        return this.page.locator('#result');
    }

    async expandNode(name: string) {
        await this.page
            .locator('.rc-tree-treenode')
            .filter({ has: this.page.getByText(name, { exact: true }) })
            .locator('.rc-tree-switcher')
            .click();
    }

    async selectCheckbox(name: string) {
        await this.page.getByRole('checkbox', { name: `Select ${name}` }).click();
    }
}