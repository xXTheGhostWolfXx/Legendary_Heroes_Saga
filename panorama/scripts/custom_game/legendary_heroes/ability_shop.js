function AddDebugAbilityShop(color)
{
	var AbilityShopMain = $( "#AbilityShopMain" );
	AbilityShopMain.RemoveAndDeleteChildren();

	var panel=$.CreatePanel("Panel", $("#AbilityShopMain"), "");
	panel.BLoadLayoutSnippet("AbilityPanel");
}
function debug()
{
	$.Msg("debug!");
	AddDebugAbilityShop();
}

debug();
























//"use strict";

//function DebugRoundProgress(color)
//{
	//Make the Panel
	//var panel = $.CreatePanel("Panel", $("#RoundProgressMain"), "");
	//panel.BLoadLayoutSnippet("RoundProgress");

	//panel.FindChildTraverse("NumberOfEnemiesSlainText").text = "5/12";
    //$("#RoundProgressText").text = "    Round Progress    ";
    //$("#RoundNameText").text = "The Horde";
    //$("#NumberOfEnemiesSlainText").text = "50/100";
    //$("#RoundNumberText").text = "Round 10";
    //SetRoundProgress(panel, 55, 100);
//}

//function SetRoundProgress(round, current, goal)
//{
	//var percent = (current / goal);
	//("#NumberOfEnemiesSlainText").text = current + "/" + goal;
//}

//function debug()
//{
	//$.Msg("Debug!");
	//DebugRoundProgress();

//}

//debug();