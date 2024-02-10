# webiot-2024
**OS** : Ubuntu 22.04 LTS  

## depends  
- ros2 humble
- python3-rpi.gpio
- python3-smbus

## To start this project run　　
git clone --recursive https://github.com/tsubame-rustica/webiot-2024.git  
colcon build  
. ./install/setup.bash  
ros2 launch webiot-2024_launch webiot-2024_launch.launch.xml  
