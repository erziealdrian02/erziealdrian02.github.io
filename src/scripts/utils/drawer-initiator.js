// const DrawerInitiator = {
//   init({ button, drawer, content }) {
//     button.addEventListener('click', (event) => {
//       this._toggleDrawer(event, drawer);
//     });

//     content.addEventListener('click', (event) => {
//       this._closeDrawer(event, drawer);
//     });

//     // Klik di luar drawer menutup drawer
//     window.addEventListener('click', (event) => {
//       if (event.target !== button && !drawer.contains(event.target)) {
//         this._closeDrawer(event, drawer);
//       }
//     });
//   },

//   _toggleDrawer(event, drawer) {
//     event.stopPropagation();
//     drawer.classList.toggle('open');
//   },

//   _closeDrawer(event, drawer) {
//     event.stopPropagation();
//     drawer.classList.remove('open');
//   },
// };

// export default DrawerInitiator;
