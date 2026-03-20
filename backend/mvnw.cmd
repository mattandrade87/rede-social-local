@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    https://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM Begin all REM://; @sym ["{@sym @sym
@REM Maven Wrapper script for Windows
@REM ----------------------------------------------------------------------------

@echo off
setlocal

set MAVEN_PROJECTBASEDIR=%~dp0
set MAVEN_WRAPPER_PROPERTIES="%MAVEN_PROJECTBASEDIR%.mvn\wrapper\maven-wrapper.properties"
set MAVEN_WRAPPER_JAR="%MAVEN_PROJECTBASEDIR%.mvn\wrapper\maven-wrapper.jar"

if exist %MAVEN_WRAPPER_PROPERTIES% (
    for /f "tokens=1,* delims==" %%a in (%MAVEN_WRAPPER_PROPERTIES%) do (
        if "%%a"=="distributionUrl" set DOWNLOAD_URL=%%b
        if "%%a"=="wrapperUrl" set WRAPPER_URL=%%b
    )
)

if not exist %MAVEN_WRAPPER_JAR% (
    echo Downloading Maven Wrapper...
    powershell -Command "(New-Object Net.WebClient).DownloadFile('%WRAPPER_URL%', %MAVEN_WRAPPER_JAR%)" >nul 2>&1
    if not exist %MAVEN_WRAPPER_JAR% (
        echo Falling back to direct Maven download...
        set MAVEN_HOME=%MAVEN_PROJECTBASEDIR%.mvn\maven
        if not exist "!MAVEN_HOME!" mkdir "!MAVEN_HOME!"
        set MAVEN_ZIP=%MAVEN_PROJECTBASEDIR%.mvn\maven.zip
        powershell -Command "(New-Object Net.WebClient).DownloadFile('%DOWNLOAD_URL%', '!MAVEN_ZIP!')"
        powershell -Command "Expand-Archive -Path '!MAVEN_ZIP!' -DestinationPath '!MAVEN_HOME!' -Force"
        del "!MAVEN_ZIP!"
        for /d %%i in ("!MAVEN_HOME!\apache-maven-*") do set MAVEN_HOME=%%i
        "!MAVEN_HOME!\bin\mvn.cmd" %*
        goto end
    )
)

java -jar %MAVEN_WRAPPER_JAR% %*

:end
endlocal
