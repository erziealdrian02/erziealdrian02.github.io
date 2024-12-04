const TabInitiator = {
  init({ programmingTab, toolsTab, programmingContent, toolsContent }) {
    if (programmingTab && toolsTab && programmingContent && toolsContent) {
      // Set default tab dan konten aktif
      this._setDefaultTab(
        programmingTab,
        toolsTab,
        programmingContent,
        toolsContent
      );

      // Tambahkan event listener untuk tab
      programmingTab.addEventListener('click', () => {
        this._switchTab(
          programmingTab,
          toolsTab,
          programmingContent,
          toolsContent
        );
      });

      toolsTab.addEventListener('click', () => {
        this._switchTab(
          toolsTab,
          programmingTab,
          toolsContent,
          programmingContent
        );
      });
    } else {
      console.error('Tab elements not found. Please check your selectors.');
    }
  },

  _setDefaultTab(activeTab, inactiveTab, activeContent, inactiveContent) {
    // Atur tab default sebagai aktif
    activeTab.setAttribute('aria-selected', 'true');
    activeTab.classList.add(
      'border-primary',
      'dark:border-blue',
      'text-primary'
    );
    activeTab.classList.remove('border-transparent', 'text-gray-500');

    inactiveTab.setAttribute('aria-selected', 'false');
    inactiveTab.classList.add('border-transparent', 'text-gray-500');
    inactiveTab.classList.remove(
      'border-primary',
      'dark:border-blue',
      'text-primary'
    );

    // Atur konten default sebagai terlihat
    activeContent.classList.remove('hidden');
    activeContent.setAttribute('data-tab-active', '');

    inactiveContent.classList.add('hidden');
    inactiveContent.removeAttribute('data-tab-active');
  },

  _switchTab(activeTab, inactiveTab, activeContent, inactiveContent) {
    // Perbarui tab aktif
    activeTab.setAttribute('aria-selected', 'true');
    activeTab.classList.add(
      'border-primary',
      'dark:border-blue',
      'text-primary'
    );
    activeTab.classList.remove('border-transparent', 'text-gray-500');

    inactiveTab.setAttribute('aria-selected', 'false');
    inactiveTab.classList.add('border-transparent', 'text-gray-500');
    inactiveTab.classList.remove(
      'border-primary',
      'dark:border-blue',
      'text-primary'
    );

    // Perbarui konten aktif
    activeContent.classList.remove('hidden');
    activeContent.setAttribute('data-tab-active', '');

    inactiveContent.classList.add('hidden');
    inactiveContent.removeAttribute('data-tab-active');
  },
};

export default TabInitiator;
