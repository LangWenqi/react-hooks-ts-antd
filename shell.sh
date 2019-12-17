# !/bin/bash
msg=$1  # $1为第一个参数
branch=''
branch1='master'
branch2='dev'
function getBranch {
  br=`git branch | grep "*"`
  branch=${br/* /}
	echo $branch
}
getBranch
list=("push到远程" "我再想想")
function selectFuc() {
  select var in ${list[@]}; do
  	break;
	done
		if [ $var = ${list[0]} ]
		then
			if [ $1 -gt 1 ]
			then
				git push
			else
				selectFuc $(($1 + 1))
			fi
		else
			echo "完成build、add、commit、pull，别忘了push"
		fi
} 
function initFuc() {
	if [ $branch = $branch1 -o $branch = $branch2 ]
	then
		yarn build
	fi
	git add .
	git commit -m"${msg}"
	git pull
	git status
	echo "是否push到远程分支（请注意 master 和 dev 需要build后再push）"
	selectFuc 1
}
function ifHasCommitMsg() {
	if [ ! -n "$msg"  ]
	then
		echo "请输入commit参数（./shell.sh XXX）"
	else
		initFuc
	fi
}
ifHasCommitMsg

