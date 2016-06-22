cd debs && rm -rf *.deb
cd ..
cd unpackaged
dpkg-deb -b -Zgzip "Android L(esque) Lock Screen Beta" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Android Lollipop Messages" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Android Lollipop Messages Alt" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Binary Keypad" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Bloard" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Cataracs Setup" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Cataracs Theme" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Clear All" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Cornered" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Cornered (Geo Sans Light Edition)" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Evasion Respring" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Flip Control Center Themes" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Fused" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "GBA4iOS" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Geo Sans Light Font" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Golden Anemone iWidgets" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Gotham Glyphs CC" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Gotham Glyphs Media Player" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Gotham Glyphs Theme" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Homescreen Bundle" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "i9 Setup" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "i9 Setup for i8" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "iOS 6 Complete (Theme)" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Japanese Wilderness" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Keyboard Essentials" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Kitkat Battery for Alkaline" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Left Sided" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Lockscreen Bundle" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Lotus" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Lotus Calendar" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Messages Bundle" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Pokemon Emerald" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Right Sided" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Right Sided (Geo Sans Light Edition)" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Sandy" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Solstice8" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Stairs" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Status Bar Bundle" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "System Wide Tweaks" && mv *.deb ~/Desktop/Repo/debs 
dpkg-deb -b -Zgzip "Theme Bundle" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Windows Respring Logo" && mv *.deb ~/Desktop/Repo/debs
dpkg-deb -b -Zgzip "Zelda Hearts for Alkaline" && mv *.deb ~/Desktop/Repo/debs
cd ..
rm -rf *.bz2
dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages
