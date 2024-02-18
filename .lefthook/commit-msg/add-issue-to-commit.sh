#!/usr/bin/env bash

# [Git Hook] commit prefix 
# Commit 시 Branch 의 issue number를 자동으로 커밋 메세지에 삽입

# 실행권한을 부여해야 스크립트를 실행할 수 있습니다 
# chmod +x ./add-issue-to-commit.sh

COMMIT_MSG_FILE=$1

branch_name=`git rev-parse --abbrev-ref HEAD`
pr_type=`echo ${branch_name} | cut -f1 -d '/'`
issue_number=`echo ${branch_name} | cut -f2 -d '/' | cut -f1 -d '_'`

first_line=`head -n1 ${COMMIT_MSG_FILE}`
first_line="${first_line////\/}"
first_line="${first_line//[/\[}"
first_line="${first_line//]/\]}"
first_line="${first_line//'*'/\*}"

prefix_type=`echo ${first_line} | cut -f1 -d ':'`
message=`echo ${first_line} | cut -f2- -d ':'`

echo ISSUE_NUMBER: $issue_number
echo FIRST_LINE: $first_line
echo PR_TYPE: $pr_type
if [ "$prefix_type" != "$first_line" ]; then
    echo PREFIX_TYPE: $prefix_type
fi
echo COMMIT_MSG_FILE: $COMMIT_MSG_FILE # COMMIT_MSG_FILE: .git/COMMIT_EDITMSG

number_re='^[0-9]+$'
issue_re='#[0-9]+'

issue_feature_prefix='feature'

commit_prefix_reg_exp='^\\\[.*\\\].*$'

# branch name: xxxxx/123_XXXX

# ex) 커밋 메시지가 'my_commit_message'일 경우
#  - branch name: feature/123_XXXX ->  [#123] my_commit_message

if [[ $issue_number =~ $number_re ]];
then
    if [[ $first_line =~ $commit_prefix_reg_exp ]]; then
        exit 0
    fi

    if [ "$pr_type" == "$issue_feature_prefix" ]; then
        sed -i.bak "1s/${first_line}/[#$issue_number] $first_line/" $COMMIT_MSG_FILE
        exit 0
    fi
fi

# 외에는 일반 커밋 메세지
