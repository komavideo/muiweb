@echo off

set year=%date:~0,4%
set month=%date:~5,2%
set day=%date:~8,2%
set hour=%time:~0,2%
set hour=%hour: =0%
set minite=%time:~3,2%
set second=%time:~6,2%
set datetime_string=%year%%month%%day%-%hour%%minite%%second%
set commit_string=%datetime_string%-updated(ReactMaterialUI).

call git add .
call git commit -m %commit_string%
call git status
call git log -1
call cmd
