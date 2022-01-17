if [ -d "~/.jfrog/jfrog-cli.conf.v5" ]; then rm -Rf ~/.jfrog/jfrog-cli.conf.v5; fi
jfrog config add $int_pegeneric_server --artifactory-url https://$int_pegeneric_server.jfrog.io/artifactory --user $int_pegeneric_user --password $int_pegeneric_password --interactive=false
jfrog config use $int_pegeneric_server