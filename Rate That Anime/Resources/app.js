Titanium.UI.setBackgroundColor('#fff');
var tabGroup = Titanium.UI.createTabGroup();
 
var login = Titanium.UI.createWindow({
    title:'User Login',
    tabBarHidden:true,
    url:'login.js'
});
 
var loginTab = Titanium.UI.createTab({
    title:"Login",
    window:login
});
 
tabGroup.addTab(loginTab);
tabGroup.open();