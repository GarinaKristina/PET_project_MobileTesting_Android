describe('bas', async () => {
  it('should click settings ', async () => {
    const settingsBtn = $('~Settings');
    await settingsBtn.click();
  });
  it('should click day', async () => {
    const dayBtn = $('android.widget.RelativeLayout');
    await dayBtn.click();
  });
  it('should choose thuesday', async () => {
    const mondayBtn = $$('android.widget.CheckedTextView')[2];
    await mondayBtn.click();
  });
  it('should return to main page', async () => {
    const returnBtn = $('android.widget.TextView');
    await returnBtn.click();
  });
  it('should type Kristina', async () => {
    const elem = $('android.widget.EditText');
    await elem.click();
    await elem.setValue('Kristina');
    await browser.pause(3000);
  });
  it('should save', async () => {
    const elem = $('android.widget.Button');
    await elem.click();
    await browser.pause(3000);
  });
});
