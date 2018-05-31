RightButton.SetPanelEvent(
  "onmouseover",
  function(){
    $.DispatchEvent("ScrollPanelRight", Heroes);
  }
)