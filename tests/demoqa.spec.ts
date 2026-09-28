import { test, expect } from '@playwright/test';
import {
  DemoQaAlertsFrameWindowsPage,
  DemoQaCheckboxPage,
  DemoQaElementsPage,
  DemoQaHomePage,
  DemoQaModalDialogsPage,
} from '../pages/demoqa.page';

test('DemoQA website is loaded', async ({ page }) => {
  const homePage = new DemoQaHomePage(page);

  await homePage.goto();

  await expect(page).toHaveTitle('demosite');
  await expect(page.getByRole('link', { name: 'Elements' })).toBeVisible();
});

test('selecting Notes in the checkbox tree shows the selection', async ({ page }) => {
  const homePage = new DemoQaHomePage(page);
  const elementsPage = new DemoQaElementsPage(page);
  const checkboxPage = new DemoQaCheckboxPage(page);

  await homePage.goto();
  await homePage.openElements();
  await elementsPage.openCheckbox();
  await expect(checkboxPage.homeLabel).toBeVisible();

  await checkboxPage.expandNode('Home');
  await checkboxPage.expandNode('Desktop');
  await checkboxPage.selectCheckbox('Notes');

  await expect(checkboxPage.selectionResult).toContainText(
    /You have selected\s*:\s*notes/i,
  );
});

test('small modal opens and closes from Modal Dialogs page', async ({ page }) => {
  const homePage = new DemoQaHomePage(page);
  const alertsFrameWindowsPage = new DemoQaAlertsFrameWindowsPage(page);
  const modalDialogsPage = new DemoQaModalDialogsPage(page);

  await homePage.goto();
  await homePage.openAlertsFrameWindows();
  await alertsFrameWindowsPage.openModalDialogs();
  await modalDialogsPage.openSmallModal();

  await expect(modalDialogsPage.smallModalDialog).toBeVisible();

  await modalDialogsPage.closeSmallModal();

  await expect(modalDialogsPage.smallModalDialog).toBeHidden();
});