// Copyright HTML Dog 2016
var dex=document.getElementById("dex"),sourcePre=document.getElementById("source"),sourceCode=sourcePre.getElementsByTagName("code")[0],headingSource=dex.getElementsByTagName("h2")[0],headingOutput=dex.getElementsByTagName("h2")[1],originalCode=sourceCode.textContent;if(safeDex=!0,"sandbox"in document.createElement("iframe")){sourceCode.contentEditable="true",headingSource.textContent+=" (editable)",headingOutput.textContent+=" (live)";var outputFile=dex.getElementsByTagName("iframe")[0],outputData=document.createElement("iframe");outputData.sandbox="allow-scripts allow-same-origin",outputFile.parentNode.replaceChild(outputData,outputFile);var reloadP=document.createElement("p"),reloadA=document.createElement("a");reloadA.title="Reload original code",sourcePre.parentNode.appendChild(reloadP),reloadP.appendChild(reloadA),reloadA.addEventListener("click",function(e){e.preventDefault(),sourceCode.textContent=originalCode,render(),Prism.highlightElement(sourceCode)},!1);var nowCode="";sourceCode.addEventListener("keyup",function(){nowCode!==sourceCode.textContent&&(render(),nowCode=sourceCode.textContent)},!1);var render=function(){var e=outputData.contentDocument;e.open(),e.write(sourceCode.textContent),e.close()};render()}dex.className="js1 selectedOutput",headingSource.addEventListener("click",function(){dex.className="js1 selectedSource"}),headingOutput.addEventListener("click",function(){dex.className="js1 selectedOutput"});