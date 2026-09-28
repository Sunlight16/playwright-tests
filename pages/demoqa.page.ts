import type { Locator, Page } from '@playwright/test';

export class DemoQaHomePage {
    constructor(private readonly page: Page) { }

    async goto() {
        await this.page.goto('/');
    }

    async openElements() {
        await this.page.getByRole('link', { name: 'Elements' }).click();
    }

    async openAlertsFrameWindows() {
        await this.page.getByRole('link', { name: 'Alerts, Frame & Windows' }).click();
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

export class DemoQaAlertsFrameWindowsPage {
    constructor(private readonly page: Page) { }

    async openModalDialogs() {
        await this.page.getByRole('link', { name: 'Modal Dialogs' }).click();
    }
}

export class DemoQaModalDialogsPage {
    constructor(private readonly page: Page) { }

    get smallModalDialog(): Locator {
        return this.page.locator('#example-modal-sizes-title-sm');
    }

    async openSmallModal() {
        await this.page.getByRole('button', { name: 'Small modal' }).click();
    }

    async closeSmallModal() {
        await this.page.getByRole('button', { name: 'Close' }).click();
    }
}