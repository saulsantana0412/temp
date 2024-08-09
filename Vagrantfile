Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/jammy64"
  
    config.vm.define "servidor1" do |servidor1|
        servidor1.vm.hostname = "servidor1"
        servidor1.vm.network "private_network", ip: "192.168.56.40"
        servidor1.vm.provider "virtualbox" do |vb|
        vb.memory = 512
        vb.cpus = 1
      end
    end
  
    config.vm.synced_folder '.', '/vagrant', disabled: true
end