function cout(io, msg){				// 방에서 콘솔창으로 출력
	if(msg){
		if(!io) return console.log(t.showDate() + ' ◀ ' + msg);
		else return console.log(t.showDate() + ' ▶ ' + msg);
	}
}
function c(msg){ 				// 콘솔창에서 방으로 입력
	room.sendChat(' 외부 : [0]🌐관리자: ' + msg + ' (귓속말 답장: !e 0 답할 내용)'); 
	cout(true, '전달: ' + msg);
};
// ---------------------내장 맵------------------------------------------
var map = [
	`{
		//code_name: CROP-MK
		"name" : "Classic Rop",
	
		"width" : 420,
	
		"height" : 200,
	
		"redSpawnPoints" : [ 
			[-90, 30], [-90,-30],[-200, 70], [-200, -70], [-200, 0], [-300, -30], [-300, 30], [-370, 0], [-480, 100],
		],
	
		"blueSpawnPoints" : [
			[90, 30], [90,-30],[200, 70], [200, -70], [200, 0], [300, -30], [300, 30], [370, 0], [480, -100],
		],
	
		"bg" : { "type" : "grass", "width" : 370, "height" : 170, "kickOffRadius" : 75, "cornerRadius" : 10 },
	
		"vertexes" : [
			/* 0 */ { "x" : -370, "y" : 160, "trait" : "ballArea" },
			/* 1 */ { "x" : -370, "y" : 64, "trait" : "ballArea" },
			/* 2 */ { "x" : -370, "y" : -64, "trait" : "ballArea" },
			/* 3 */ { "x" : -370, "y" : -160, "trait" : "ballArea", "vis" : false, "curve" : 90, "color" : "C7E6BD" },
			/* 4 */ { "x" : 370, "y" : 160, "trait" : "ballArea", "vis" : true, "curve" : 90, "color" : "C7E6BD" },
			/* 5 */ { "x" : 370, "y" : 64, "trait" : "ballArea" },
			/* 6 */ { "x" : 370, "y" : -64, "trait" : "ballArea" },
			/* 7 */ { "x" : 370, "y" : -160, "trait" : "ballArea", "vis" : false, "curve" : -90, "color" : "C7E6BD" },
			
			/* 8 */ { "x" : 0, "y" : 200, "trait" : "kickOffBarrier" },
			/* 9 */ { "x" : 0, "y" : 75, "trait" : "kickOffBarrier" },
			/* 10 */ { "x" : 0, "y" : -75, "trait" : "kickOffBarrier" },
			/* 11 */ { "x" : 0, "y" : -200, "trait" : "kickOffBarrier" },
			
			/* 12 */ { "x" : -380, "y" : -64, "trait" : "goalNet", "color" : "2E2E2E" },
			/* 13 */ { "x" : -400, "y" : -44, "trait" : "goalNet", "color" : "2E2E2E" },
			/* 14 */ { "x" : -400, "y" : 44, "trait" : "goalNet", "color" : "2E2E2E" },
			/* 15 */ { "x" : -380, "y" : 64, "trait" : "goalNet", "color" : "2E2E2E" },
			/* 16 */ { "x" : 380, "y" : -64, "trait" : "goalNet", "color" : "2E2E2E" },
			/* 17 */ { "x" : 400, "y" : -44, "trait" : "goalNet", "color" : "2E2E2E" },
			/* 18 */ { "x" : 400, "y" : 44, "trait" : "goalNet", "color" : "2E2E2E" },
			/* 19 */ { "x" : 380, "y" : 64, "trait" : "goalNet", "color" : "2E2E2E" },
			
			/* 20 */ { "x" : -370, "y" : 160, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : -90, "color" : "C7E6BD" },
			/* 21 */ { "x" : -360, "y" : 170, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : -90, "color" : "C7E6BD" },
			/* 22 */ { "x" : -360, "y" : -170, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 90, "color" : "C7E6BD" },
			/* 23 */ { "x" : 360, "y" : 170, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 90, "color" : "C7E6BD" },
			/* 24 */ { "x" : 360, "y" : -170, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : -90, "color" : "C7E6BD" },
			
			/* 25 */ { "x" : -350, "y" : 1830, "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			/* 26 */ { "x" : 350, "y" : 1830, "cMask" : ["wall" ], "cGroup" : ["wall" ] }
	
		],
	
		"segments" : [
			{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
			{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
			{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
			{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
			
			{ "v0" : 12, "v1" : 13, "curve" : -90, "color" : "2E2E2E", "trait" : "goalNet" },
			{ "v0" : 13, "v1" : 14, "color" : "2E2E2E", "trait" : "goalNet" },
			{ "v0" : 14, "v1" : 15, "curve" : -90, "color" : "2E2E2E", "trait" : "goalNet" },
			{ "v0" : 16, "v1" : 17, "curve" : 90, "color" : "2E2E2E", "trait" : "goalNet" },
			{ "v0" : 17, "v1" : 18, "color" : "2E2E2E", "trait" : "goalNet" },
			{ "v0" : 18, "v1" : 19, "curve" : 90, "color" : "2E2E2E", "trait" : "goalNet" },
			
			{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
			{ "v0" : 9, "v1" : 10, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
			{ "v0" : 9, "v1" : 10, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
			{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" },
			
			{ "v0" : 20, "v1" : 21, "curve" : -90, "vis" : false, "color" : "C7E6BD", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
			{ "v0" : 3, "v1" : 22, "curve" : 90, "vis" : false, "color" : "C7E6BD", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
			{ "v0" : 4, "v1" : 23, "curve" : 90, "vis" : true, "color" : "C7E6BD", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
			{ "v0" : 7, "v1" : 24, "curve" : -90, "vis" : false, "color" : "C7E6BD", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" }
	
		],
	
		"goals" : [
			{ "p0" : [-370,-64 ], "p1" : [-370,64 ], "team" : "red" },
			{ "p0" : [370,64 ], "p1" : [370,-64 ], "team" : "blue" }
	
		],
	
		"discs" : [
			{ "pos" : [-370,64 ], "color" : "F6CECE", "trait" : "goalPost" },
			{ "pos" : [-370,-64 ], "color" : "F6CECE", "trait" : "goalPost" },
			{ "pos" : [370,64 ], "color" : "CECEF6", "trait" : "goalPost" },
			{ "pos" : [370,-64 ], "color" : "CECEF6", "trait" : "goalPost" }
	
		],
	
		"planes" : [
			{ "normal" : [0,1 ], "dist" : -170, "trait" : "ballArea" },
			{ "normal" : [0,-1 ], "dist" : -170, "trait" : "ballArea" },
			
			{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.1 },
			{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.1 },
			{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.1 },
			{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.1 }
	
		],
	
		"traits" : {
			"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
			"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
			"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
			"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }
	
		}
	}`
]
//-----------------------------------------------------------------------
var room = HBInit({ 
	roomName: "UMUX의 방",
	maxPlayers: 15, 				// 플레이어 최대 인원
	playerName : " ", 				// 방장 이름(그대로 두는 걸 권장)
	public : true,					// 공개방 여부
	noPlayer: false					// 방장 여부(그대로 두는 걸 권장)
});
room.setCustomStadium(map[0]);		// 기본 설정된 내장맵
room.setScoreLimit(0);			// 기본 제한점수
room.setTimeLimit(0);			// 기본 제한시간
//----------------------------------------------------------------------------------------------------
var date = new Date();
var Roomversion = 'v1.00';				// 봇방 버전
var UXversion  = '1.0.0';				// UMUX 버전(건드리지 마시오)
var dev = false;					// 개발 버전 설정

class GameManager{													// 게임 매니저 클래스
	constructor(){
		this.gamestats;											// 0: 정지, 1: 시작, 2: 게임 중

		this.onGameStart = function(){							// 게임 시작
			game.gamestats = 1;
			cout(true, '게임 시작.');
			return false;
		}
		this.onGameTick = function(){							// 게임 도중
			game.gamestats = 2;
			return false;
		}
		this.onGameStop = function(){							// 게임 종료
			game.gamestats = 0;
			cout(true, '게임 종료');
		}
		this.onGamePause = function(byPlayer){ 						// 게임 중단
			if(byPlayer.id) cout(true, byPlayer.name + '(이)가 게임을 일시 중단함.');
			else cout(true, '게임 일시 중단.');		// 명령어 입력으로 실행되면 플레이어 이름 가림
			return false;
		}	
		this.onGameUnpause 	= function(byPlayer){					// 게임 재개
			if(byPlayer.id) cout(true, byPlayer.name + '(이)가 게임을 재개함.');
			else cout(true, '게임 재개.');			// 명령어 입력으로 실행되면 플레이어 이름 가림
			return false;
		}
		this.onPlayerJoin = function(player) {											// 플레이어 입장
			p.cntPlayers++;
			p.getNumbersFun();																// 할당
			room.sendChat("This room only supports Korean language. :", player.id);		
			n.devCheck(player);																// 개발자 버전 체크
			chat.alltoChat(player, n.notice() + player.name + '님이 입장했습니다.', true);		// 안내 메시지
			// 사칭 및 블랙리스트 탐지
			if(admin.filterPlayer(player)){ 
				n.announce(n.notice() + player.name + '님은 관심 대상입니다.', player.id, 'green', 5, 3);
				cout(true, player.name + '(이)가 입장함. (블랙리스트)');
			}
			else{ 
				n.announce('안녕하세요, ' + player.name + '님! (유용할 도움말: !help, !join)', player.id, null, 1, 1);
				cout(true, player.name + '(이)가 입장함.');
			}
			admin.updateAdmins(player);
			if(p.cntPlayers == 1){ 
				room.startGame();
				com.setJoinPlayer(player.team, 1, player.name, player.id);	// 사람이 한 명이면 자동 시작 및 투입
			}
			return false;
		}
		this.onPlayerLeave = function(player) {											// 플레이어 퇴장
			if(!admin.kicked){													// 강제 퇴장 확인
				cout(true, player.name + '(이)가 퇴장함.');
				n.announce(n.notice() + player.name + '님이 떠났습니다.', null, 'green', 5, 1);
			}
			else admin.kicked = false;
			admin.cntSubAdmins--;
			admin.subAdmin[player.id - 1] = false;
			admin.updateAdmins(player);		// 권한 여부 확인
			// 유저 목록 정리
			p.updatePlayers(player);  
			p.getNumbersFun();
			p.cntPlayers--;
			if(!p.cntPlayers) room.stopGame();	// 사람이 없으면 자동 종료
			return false;
		}
		this.onStadiumChange = function(mapName){					// 맵 교체
			if(p.cntPlayers){
				if(Math.floor(Math.random()*6) == 0) n.announce(n.msgCommand('맵 저장 ') + '/store', null, 'green', 1, 3);
				cout(true, '맵 교체: ' + mapName);
			}
			else cout(true, '서버 오픈');
			return false;
		}
		this.onPositionsReset = function(){		 				// 좌표 초기화
			return false; 
		}
		this.onPlayerBallKick = function(){ 						// 공 찼을 때
			return false; 
		}			
		this.onTeamGoal = function(team){ 						// 골 먹힐 때
			if(team == 1){ 
				n.announce(n.notice() + '레드팀이 득점했습니다.', null, null, 4, 1);
				cout(true, '레드팀 득점');
			}
			if(team == 2){ 
				n.announce(n.notice() + '블루팀이 득점했습니다.', null, null, 4, 1);
				cout(true, '블루팀 득점');
			}
			return false; 
		}
		this.onTeamVictory = function(scores){ 						// 팀 승리
			return false; 
		}
	}
}
class Administration{												// 관리 클래스
	constructor() {
		this.cntAdmins = 0;								// 관리자 인원
		this.cntSubAdmins = 0;								// 보조 관리자 인원
		this.kicked = false;								// 강제 퇴장 여부
		this.dynamicAdmin = true	 						// 권한 동적 할당
		this.subAdmin = new Array(15);							// 보조 권한(부 어드민)
		this.teamsLock = false;								// 채팅 잠금
		this.mutedList = [];								// 채금자 목록

		this.onPlayerAdminChange = function(player){				//	플레이어 권한 획득&박탈
			if(admin.filterPlayer(player)){ 		// 블랙리스트 권한 부여 배제 대상
				room.setPlayerAdmin(player.id, false);
				admin.subAdmin[player.id - 1] = false;
				p.updateMarks(player);
			}
			if(!admin.checkAdmins) admin.getSubAdmin(player);		// 			관리자가 없으면 보조 권한 부여
			else{
				if(player.admin){					// 			플레이어가 관리자면 보조 권한 지우기
					admin.subAdmin[player.id - 1] = false;
					admin.cntSubAdmins--;
				}
				else admin.getSubAdmin(player);
			}
			return false;
		}
		this.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer){	//	플레이어 강제 퇴장
			admin.kicked = true;
			if(reason) cout(true, byPlayer.name + '(이)가 ' + kickedPlayer.name + '(을)을 강제 퇴장함. (사유: ' + reason + ')');
			else cout(true, byPlayer.name + '(이)가 ' + kickedPlayer.name + '(을)을 강제 퇴장함.');
			return admin.kicked;
		}
		this.adminHelp = function(player){					// !adminhelp	|	관리 명령어
			if (player.admin || admin.subAdmin[player.id -1])
				n.announce(n.msgCommand('관리 ') 
				+ 'p | !p | !clearbans | !time 숫자 | !set_pw | !score 숫자 | !rr | !load 숫자 | !lock | !도 ' + com.recommendCom('관련', '!ahc'), player.id, null, 4, 3);
			else n.acess(player);
			return false;  // 명령어 흔적을 남기지 않음
		}
		this.adminComHelp = function(player){					// !ahc		|	관리 명령어 도움말
			if (player.admin || admin.subAdmin[player.id -1]){
				n.announce(n.msgCommand('관리 ') + 'p/!p(게임 일시정지/시작) | !clearbans(밴 리스트 초기화)', player.id, null, 4, 3);
				n.announce(n.msgCommand('관리 ') + '!time(시간 설정) | !score(점수 설정) | !rr(게임 재시작)', player.id, null, 4, 3);
				n.announce(n.msgCommand('관리 ') + '!load ID: 맵 로드', player.id, null, 4, 3);
				n.announce(n.msgCommand('관리 ') + '!lock(팀 이동 금지/허용) | !도(도배방지문자 출력)', player.id, null, 4, 3);
			}
			else n.acess(player);
			return false;  // 명령어 흔적을 남기지 않음
		}
		this.updateAdmins = function(player) {					// 			어드민 없으면 권한 부여
			var players = room.getPlayerList().filter((player) => player.id != 0 );
			// 아무도 안 나가면 동작 없음
			if ( players.length == 0 ) return; 
			  // 어드민 나가면 아무 동작 없음
			  if ( players.find((player) => player.admin) != null ) return; 
			  admin.secAdmin = true;
			  // 어드민 없으면 부여
			  if(admin.dynamicAdmin){
					if(admin.filterPlayer(player)) return admin.getSubAdmin(player);
			  		else{
						  room.setPlayerAdmin(player.id, true);
						  n.announce(n.notice() + player.name + '님이 권한을 획득했습니다. ' + com.recommendCom('관련', '!adminhelp'), null, 'pink', 5, 2);
						  cout(true, player.name + '(이)가 권한을 얻음.');
				  }
			  }
		}	
		this.getAdminstats = function(player){					// 			어드민 권한 확인
			if(player.admin) return true;
			else return false;
		}
		this.setAdmin = function(player){					// 			권한 동적 할당 옵션
			if(player.admin || admin.subAdmin[player.id - 1]){
				if(!admin.dynamicAdmin){
					admin.dynamicAdmin = true;
					n.announce(n.unlocked() + '동적 할당이 활성화되었습니다.', player.id, 'red', 2, 1);
					cout(true, player.name + '(이)가 동적 할당을 활상화함.');
				}
				else{
					admin.dynamicAdmin = false;
					n.announce(n.locked() + '동적 할당이 비활성화되었습니다.', player.id, 'red', 2, 1);
					cout(true, player.name + '(이)가 동적 할당을 비활상화함.');
				}
				return false;
			}
			else return n.acess(player);
		}
		this.setScore = function(player, msg){					// !score n 	|	점수 변경 명령어(onlyadmin)
			if (player.admin || admin.subAdmin[player.id - 1]){
				if(!game.gamestats){
					if((msg.substr(6)) >= 0){
						if((msg.substr(6)) < 15){
							room.setScoreLimit(msg.substr(6));
							n.announce(n.notice() + '제한 점수가 ' + msg.substr(6) + '점으로 변경되었습니다.', null, 'yellow', 4, 1);
							cout(true, player.name + '(이)가 제한 점수를 ' + msg.substr(6) + '점으로 변경함.');
						}
					}
				}
				else n.announce(n.cnot() + '판이 완전히 끝난 이후에 다시 시도해 보세요.', player.id, 'orange', 5, 3);
			}
			else n.acess(player);
			return false;  // 명령어 흔적을 남기지 않음
		}
		this.setTime = function(player, msg){					// !time n	|	시간 변경 명령어(onlyadmin)
			if (player.admin || admin.subAdmin[player.id - 1]){
				if(!game.gamestats){
					if((msg.substr(6)) >= 0){
						if((msg.substr(6)) < 15){
							room.setTimeLimit(msg.substr(6));
							n.announce(n.notice() + '제한 시간이 ' + msg.substr(6) + '분으로 변경되었습니다.', null, 'yellow', 4, 1);
							cout(true, player.name + '(이)가 제한 시간을 ' + msg.substr(6) + '분으로 변경함.');
						}
					}
				}
				else n.announce(n.cnot() + '판이 완전히 끝난 이후에 다시 시도해 보세요.', player.id, 'orange', 5, 3);
			}
			else n.acess(player);
			return false;  // 명령어 흔적을 남기지 않음
		}
		this.setTeamsLock = function(player){					// !lock	|	 팀 이동 금지/허용 명령어
			if(player.admin || admin.subAdmin[player.id - 1]){
				if(!admin.teamsLock){		// 참이면 금지, 거짓이면 허용
					admin.teamsLock = true;
					room.setTeamsLock(admin.teamsLock);
					n.announce(n.locked() + '팀 자율 이동이 금지되었습니다.', null, 'pink', 5, 2);
					cout(true, player.name + '(이)가 팀 이동을 금지함.');
				}
				else{
					admin.teamsLock = false;
					room.setTeamsLock(admin.teamsLock);
					n.announce(n.unlocked() + '팀 자율 이동이 허용되었습니다.', null, 'pink', 5, 2);
					cout(true, player.name + '(이)가 팀 이동을 허용함.');
				}
			}
			else n.acess(player);
			return false;
		}
		this.setReset = function(player){					// !rr		|	게임 재시작
			if(player.admin || admin.subAdmin[player.id - 1]){
				room.stopGame();
				room.startGame();
				cout(true, '다시 시작.');
			}
			return false;  // 명령어 흔적을 남기지 않음
		}
		this.setPassword = function(player, pass){				// !set_pw	|	비번 설정
			if(player.admin || admin.subAdmin[player.id - 1]){
				if(pass.length <= 10) n.announce(n.locked() + '비밀번호가 너무 짧습니다.', player.id, 'orange', 5, 0);
				else if(pass.length >= 28) n.announce(n.locked() + '비밀번호가 너무 길어서 설정할 수 없습니다.', player.id, 'orange', 5, 0);
				else{ 
					n.announce(n.locked() + '비밀번호가 설정되었습니다.', null, 'pink', 4, 1);
					room.setPassword(pass.substr(8, 20));
				}
			}
			else n.acess(player);
			return false;
		}
		this.missPassword = function(player){ 					//			어드민 전용 명령어 오타 방지
			cout(true, player.name + '(이)가 관리자 로그인을 시도함. (실패)');
			return false; 
		}
		this.getAdmin = function(player, _msg){					//			권한 획득
			if (!player.admin){
				if(!admin.filterPlayer(player)){
					room.setPlayerAdmin(player.id, true);
					admin.subAdmin[player.id - 1] = false;
					n.announce(n.notice() + player.name + '님이 권한을 획득했습니다. ' + com.recommendCom('관련', '!adminhelp'), null, 'pink', 5,2);
					cout(true, player.name + '(이)가 권한을 얻음.');
				}
			}
			return false; // 명령어 입력한 흔적이 남지 않음
		}
		this.getSubAdmin = function(player){				// 								보조 권한 획득
			if (!player.admin){
				admin.subAdmin[player.id - 1] = true;	// 보조 권한 설정
				admin.cntSubAdmins++;			// 보조 관리자 갱신
				p.updateMarks();			// 마크 갱신
				n.announce(n.notice() + player.name + '님이 보조 권한을 획득했습니다. ' + com.recommendCom('관련', '!adminhelp'), null, 'pink', 2, 2);
				cout(true, player.name + '(이)가 보조 권한을 얻음.');
			}
			return false; // 명령어 입력한 흔적이 남지 않음
		}
		this.checkAdmins = function(){						//			관리자 인원 체크
			var members = room.getPlayerList();
			for(var i = 0; i < p.cntPlayers; i++){
				if(admin.getAdminstats(members[i])) admin.cntAdmins++;
			}
			return admin.cntAdmins;
		}
		this.checkSubAdmins = function(){					// 			보조 관리자 인원 체크
			var members = room.getPlayerList();
			for(var i = 0; i < p.cntPlayers; i++){
				if(admin.subAdmin[members[i] - 1]) admin.cntSubAdmins++;
			}
			return admin.cntSubAdmins;
		}
		this.clearBans = function(player){					// !clearbans	|	강제 퇴장 목록 초기화 명령어
			if (player.admin || admin.subAdmin[player.id - 1]){
				room.clearBans();
				n.announce(n.notice() + 'Ban 처리 내역이 초기화되었습니다.', null, 'pink', 2, 2);
				cout(true, player.name + '(이)가 영구 퇴장 목록을 모두 지움.');
			}
			else n.acess(player);
			return false;  // 명령어 흔적을 남기지 않음
		}
		this.showPassword = function(player){					// !show_pw	| 	비번 공개
			if(player.admin || admin.subAdmin[player.id - 1]) n.announce(n.notice() + '현재 비밀번호는 ' + room.password + '입니다.', player.id, 'green', 4, 0);
			else n.acess(player);
			return false;
		}
		this.releasePassword = function(player){				// !clear_pw	|	비번 해제
			if(player.admin || admin.subAdmin[player.id - 1]){
				n.announce(n.unlocked() + '비밀번호가 해제되었습니다.', null, 'pink', 4, 1);
				room.setPassword();
			}
			else n.acess(player);
			return false;
		}
		this.filterPlayer = function(player){					//			사칭 및 중복 필터(onlyadmin)
			let i = 0;
			p.members = room.getPlayerList();

			if(p.cntPlayers > 1)		// 사칭 감지
			{
				for (let i = 1; i <= p.cntPlayers; i++){
					var checkname = p.members[i].name;
					if((p.members[i].id != player.id)&&(checkname == player.name))
						return admin.doKick(player, "사칭 및 중복 접속 감지 시스템으로 인해 퇴장되었습니다.");
				}
			}
			while(i < p.blacklist.length){					//			블랙 리스트 감지
				// 포함되면 필터 반환 | 포함되지 않으면 i 증가
				if(player.name.search(p.blacklist[i]) != -1) return true;
				else i++;
			}
			return false;
		}
		this.doKick = function(player, msg){					//			강제 퇴장 처리
			room.kickPlayer(player.id, n.cnot() + msg, false);
			return false;
		}
		this.getMute = function(player, msg){					// !mute ID	|	채금 설정
			p.members = room.getPlayerList();

			if(player.admin || admin.subAdmin[player.id - 1]){
				if((msg.substr(6)> 0)&&(msg.substr(6) <= p.cntPlayers)){
					if(msg.substr(6) == p.members[msg.substr(6)].id) n.announce(n.cnot() + '자신의 채팅을 금지할 수 없습니다.', player.id, 'orange', 5, 3);
					else{
						admin.mutedList.push(p.members[msg.substr(6)].name);
						chat.alltoChat(p.members[msg.substr(6)], n.locked() + '특정 플레이어의 채팅이 금지되었습니다.', 5);
						n.announce(n.locked() + '채팅 금지되었습니다.', msg.substr(6), 'green', 5, 3);
					}
				}
				else n.announce(n.cnot() + '잘못된 대상입니다.', player.id, 'orange', 5, 3);
			}
			else if(!player.admin || !admin.subAdmin[player.id - 1]) n.acess(player);
			return false;
		}
		this.releaseMute = function(player, msg){				// !unmute ID	|	채금 풀기
			p.members = room.getPlayerList();

			if(player.admin || admin.subAdmin[player.id - 1]){
				if((msg.substr(8) > 0)&&(msg.substr(8) <= p.cntPlayers)){
					if(msg.substr(8) == p.members[msg.substr(8)].id) n.announce(n.cnot() + '잘못된 대상입니다.', player.id, 'orange', 5, 3);
					else{
						let pos = admin.mutedList.indexOf(id.substr(9));
						admin.mutedList.splice(pos, 1);
						chat.alltoChat(p.members[msg.substr(8)], n.unlocked() + '특정 플레이어의 채팅이 허용되었습니다.', 5);
						cout(true, p.members[msg.substr(8)].name + '(이)의 채금이 해제됨.');
					}
				}
				else if(!msg.substr(8)){ 
					admin.mutedList = null;
					n.announce(p.members[msg.substr(8)], n.unlocked() + '특정 플레이어의 채팅이 허용되었습니다.', null, 'green', 5);
					cout(true, '모든 채금자의 채금이 해제됨.');
				}
				else n.announce(n.cnot() + '잘못된 대상입니다.', player.id, 'orange', 2, 3);
			}
			else if(!player.admin || !admin.subAdmin[player.id - 1]) n.acess(player);
			return false;
		}
		this.putPause = function(player){					// p		|	일시 정지(onlyadmin)
			if(player.admin || admin.subAdmin[player.id - 1]){
				room.pauseGame(true);
				return false;  
			}
		}
		this.unPause = function(player){ 					// !p		|	계속(onlyadmin)
			if(player.admin || admin.subAdmin[player.id - 1]) room.pauseGame(false);
			else n.acess(player);
			return false;
		}
	}
}
class Notice {														// 알림 클래스
	constructor() {
		this.devCheck = function(player){		// 개발 버전 안내 메세지
			if(dev) return n.announce(n.cnot() + '개발 전용 테스트방이므로 원활한 플레이가 어렵습니다.', player.id, 'orange', 5, 2);
		}
		this.info = function () {			// 상세 정보
			return "📡상세정보📡 : ";
		};
		this.help = function () {			// 도움말
			return "💬도움말🗨 : ";
		};
		this.infoplayer = function () {			// 플레이어 정보
			return "🔎플레이어 정보🔍 : ";
		};
		this.notice = function () {			// 알림
			return "🛎알림🛎 : ";
		};
		this.cnot = function () {			// 주의
			return "⛔주의⛔ : ";
		};
		this.locked = function () {			// 비활성화
			return "🔒잠금🔒 : ";
		};
		this.unlocked = function () {			// 활성화
			return "🔓해제🔓 : ";
		};
		this.acess = function(player){			// 권한 없음
		n.announce(n.locked() + '권한이 없습니다.', player.id, 'yellow', 0, 0);
		return false;
		}
		this.msgCommand = function(msg){ 		// 알림 메세지
			msg = "🔎" + msg + "명령어🔍 : ";
			return msg;
		}
		this.ruleCommand = function(msg){ 		// 규칙
			msg = "🕹" + msg + "규칙🎮 : ";
			return msg;
		}						// 알림 메시지
		this.announce = function(msg, target, color, style, sound){ 
			room.sendAnnouncement(msg, target, n.getColor(color), n.getStyle(style), sound);
			return false;
		}
		this.getColor = function(color){
			switch(color){
				case 'um': color = "6CB858"; break;			// UM
				case 'red': color = "FF0000"; break;			// 빨강
				case 'orange': color = "FF5E00"; break;			// 주황
				case 'yellow': color = "FFE400"; break;			// 노랑
				case 'green': color = "8ED2AB"; break;			// 초록
				case 'sky': color = "00D8FF"; break;			// 하늘
				case 'blue': color = "0000FF"; break;			// 파랑
				case 'purple': color = "5F00FF"; break;			// 보라
				case 'pink': color = "ff86cf"; break;			// 핑크
				case 'black': color = "000000"; break;			// 검정
			}
			if(color) color = ("0x" + color);
			else color = "0xFFFFFF";
			return color;
		}
		this.getStyle = function(style){
			switch(style){
				case 1: style = "nomarl"; break;	// 기본
				case 2: style = "bold"; break;		// 볼드체
				case 3: style = "italic"; break;	// 이탈릭
				case 4: style = "small"; break;		// 작게
				case 5: style = "small-bold"; break;	// 작은 볼드체
				case 6: style = "small-italic"; break;	// 작은 이탈릭
			}
			return style;
		}
	}
}
class ChatSystem {													// 채팅 시스템 클래스
	constructor(){
		this.face = [									//			이모티콘
			'🤔', 
			'😛', '😍', '😅', '😂', '🤣', 
			'😎', '😐', '😥', '😰', '🙄', 
			'😴', '🥶', '😱', '🥵'
		]
		this.getFace = function(emoji, name){ return (emoji + name + emoji) }
		this.onPlayerChat = function(player, msg) {					//			채팅 시스템
			let i = 0;
			let spacePos = msg.search(" ");
			let command = msg.substr(0, spacePos !== -1 ? spacePos : msg.length);

			while(i < admin.mutedList.length){
				// 포함되면 필터 반환 | 포함되지 않으면 i 증가
				if(player.name.search(admin.mutedList[i]) != -1) return n.announce(n.locked() + '잠시동안 채팅이 불가합니다.', player.id, 'green', 5, 3);
				else i++;
			}
			if (commands.hasOwnProperty(command)) return commands[command](player, msg);	//	명령어
			else chat.send(player, msg, true);												//	일반 채팅
			return false;
		}
		this.FfilterFun = function(player){
			admin.doKick(player);		// 퇴장 처리
		}
		this.send = function(player, msg, chatPublic){					//			일반 채팅
			var fmsg = (" 전체 : [" + p.getIdofPlayer(player) + "]");
			var lmsg = (player.name + ": " + msg);

			if(chatPublic) p.getMarks(true, player, fmsg, lmsg);
			else p.getMarks(false, player, fmsg, lmsg);
			return false;
		}
		this.alltoChat = function(player, msg, type){					//			나 빼고 다 보내기
			p.members = room.getPlayerList();
			for(var i = 0; i<= p.cntPlayers; i++){
				if(p.members[i].id != player.id){
					if(type) n.announce(msg, p.members[i].id, 'yellow', 5, 1);	// 공지로 출력
					else room.sendChat(msg, p.members[i].id);			// 일반 채팅으로 출력
				}
			}
			return false;
		}
		this.whisperChat = function(player, msg)					// !e ID	|	귓속말 명령어
		{
			p.members = room.getPlayerList();
			for(var i = 0; i <= p.cntPlayers; i++){
				if(p.members[i] && (i == msg.substr(3, 2))){
					if(p.members[i].id == player.id) 	// 동일 인물인 경우
					n.announce(n.cnot() + '자기 자신에게 귓속말을 보낼 수 없습니다.', player.id, 'orange', 2, 3);
					else if(!p.members[i].id){				// id가 0이면 콘솔창으로 전달
						room.sendChat("외부 : [" + p.getIdofPlayer(player) + "]" + p.checkMarks(player) + player.name + "→ [0]🌐관리자: " + msg.substr(5, 50), player.id);
						cout(false, "[" + p.getIdofPlayer(player) + "]" + player.name + ": " +  msg.substr(5, 50));
					}
					else{
						room.sendChat("개인 : [" + p.getIdofPlayer(player) + "]" + p.checkMarks(player) + player.name + "→ [" + p.getIdofPlayer(p.members[i]) + "]" + p.checkMarks(p.members[i]) + p.members[i].name + ": " + msg.substr(5, 50), player.id);
						room.sendChat("개인 : [" + p.getIdofPlayer(player) + "]" + p.checkMarks(player) + player.name + "→ [" + p.getIdofPlayer(p.members[i]) + "]" + p.checkMarks(p.members[i]) + p.members[i].name + ": " +  msg.substr(5, 50) + " (답장:  !e " + p.getIdofPlayer(player) + " 답할 내용)", p.members[i].id);
						cout(true, "개인 : [" + p.getIdofPlayer(player) + "]" + p.checkMarks(player) + player.name + "→ [" + p.getIdofPlayer(p.members[i]) + "]" + p.checkMarks(p.members[i]) + p.members[i].name + ": " + msg.substr(5, 50));
					}
				}
			}
			// 귓속말 처리
			return false;
		}
		this.teamChat = function(player, msg)						// !t 		|	팀 채팅 명령어
		{
			p.members = room.getPlayerList();
			var toTeam;
			
			switch(player.team){
				case 0: toTeam = "관중"; break;
				case 1: toTeam = "레드"; break;
				case 2: toTeam = "블루"; break;
			}
			room.sendChat(toTeam + " : [" + p.getIdofPlayer(player) + "]" + p.checkMarks(player) + player.name + ": " + msg.substr(3, 50), player.id);
			
			for(var j = 1; j <= p.cntPlayers; j++){
				// 플레이어를 제외한 나머지 팀원 찾기
				if(p.getIdofPlayer(p.members[j]) != player.id){
					if(p.getTeamofPlayer(p.members[j]) == player.team)
					room.sendChat(toTeam + " : [" + p.getIdofPlayer(player) + "]" + p.checkMarks(player) + player.name + ": " +  msg.substr(3, 50) + " (팀 채팅: !t 답할 내용)", p.members[j].id);
				}
			}
			return false;
		}
		this.allChat = function(player, msg){						// !a 		|	전체 채팅 명령어
			let senseFilter = msg.search('!a');
			var i = 0;
			
			if(senseFilter != -1) i = 3;	
			room.sendChat(" 전체 : [" + p.getIdofPlayer(player) + "]" + p.checkMarks(player) + player.name + ": " + msg.substr(i, 50));
			return false;
		}
		
	}
}
class Commands{														// 명령어 클래스
	constructor(){
		this.plaster = function(player){						// !도		|	도움말, 도배방지문자(onlyadmin)
    		if (player.admin || admin.subAdmin[player.id - 1]){ 
				room.sendChat(chat.getFace(chat.face[9], 'AlphaGo'));
				room.sendChat(chat.getFace(chat.face[9], 'AlphaGo') + ': ' + n.cnot() + '도배 방지');
				room.sendChat(chat.getFace(chat.face[9], 'AlphaGo') + ': ' + n.cnot() + '분란 방지');
				room.sendChat(chat.getFace(chat.face[9], 'AlphaGo') + ': ' + n.cnot() + '정숙 유지');
				room.sendChat(chat.getFace(chat.face[9], 'AlphaGo') + ': ' + n.cnot() + '질서 유지');
				room.sendChat(chat.getFace(chat.face[9], 'AlphaGo') + ': ');
				cout(true, player.name + '(이)가 도배 방지 문자를 출력함.');
			}
			else com.comHelp(player, '!도');	// 도움말
			return false; 						// 명령어 흔적을 남기지 않음
		}
		this.comHelp = function(player, msg){ 						// !help		|	명령어 도움말
			var players = room.getPlayerList();

			chat.send(player, msg, true);
			for(var i = 1; i <= p.cntPlayers; i++){
				if(players[i].admin || admin.subAdmin[player.id - 1]){
					n.announce(n.msgCommand('일반 ') 
					+ '!adminhelp(방 관리) | !bothelp(봇방) | !maphelp(맵) | !join(투입) | !chathelp(채팅) | !etchelp(기타)', players[i].id, null, 4, 3);
				}
				else{
					n.announce(n.msgCommand('일반 ') 
					+ '!bothelp(봇방) | !maphelp(맵) | !join(투입) | !chathelp(채팅) | !etchelp(기타)', players[i].id, null, 4, 3);
				}
			}
			return false;
		}
		this.botHelp = function(player, msg){						// !bothelp		|	봇방 도움말
			var players = room.getPlayerList();
			chat.send(player, msg, true);
			for(var i = 1; i <= p.cntPlayers; i++){
				if(players[i].admin || admin.subAdmin[player.id - 1]){
					n.announce(n.msgCommand('봇방 ') 
					+ '!about(봇방 정보) | !set_pw(비번 설정) | !clear_pw(비번 해제) | !도(도배 방지 문자)', players[i].id, null, 4, 3);
				}
				else{
					n.announce(n.msgCommand('봇방 ') 
					+ '!about(봇방 정보)', players[i].id, null, 4, 3);
				}
			}
			return false;
		}
		this.chatHelp = function(player, msg){						// !chathelp	|	채팅 도움말
			var players = room.getPlayerList();
			chat.send(player, msg, true);
			for(var i = 1; i <= p.cntPlayers; i++){
				if(players[i].admin || admin.subAdmin[player.id - 1]){
					n.announce(n.msgCommand('채팅 ') 
					+ '!e ID(귓속말) | !t(팀별 채팅) | !a(전체 채팅) | !도(도배 방지 문자)', players[i].id, null, 4, 3);
				}
				else{
					n.announce(n.msgCommand('채팅 ') 
					+ '!e ID(귓속말) | !t(팀별 채팅) | !a(전체 채팅)', players[i].id, null, 4, 3);
				}
			}
			return false;
		}
		this.mapHelp = function(player, msg){						// !maphelp	|	맵 도움말
			var players = room.getPlayerList();
			chat.send(player, msg, true);
			for(var i = 1; i <= p.cntPlayers; i++){
				if(players[i].admin || admin.subAdmin[player.id - 1]){
					n.announce(n.msgCommand('맵 ') 
					+ '/checksum(맵 정보 확인) | /store(맵 저장) | !maplist(내장 맵 목록) | !load ID(내장 맵 불러오기)', players[i].id, null, 4, 3);
				}
				else{
					n.announce(n.msgCommand('맵 ') 
					+ '/checksum(맵 정보 확인) | /store(맵 저장) | !maplist(내장 맵 목록)', players[i].id, null, 4, 3);
				}
			}
			return false;
		}
		this.etcHelp = function(player, msg){						// !etchelp	|	기타 도움말
			var players = room.getPlayerList();
			chat.send(player, msg, true);
			for(var i = 1; i <= p.cntPlayers; i++){
				if(players[i].admin || admin.subAdmin[player.id - 1]){
					n.announce(n.msgCommand('기타 ') 
					+ '!avatar(등번호 변경) | !adminhelp(관리 도움말)', players[i].id, null, 4, 3);
				}
				else{
					n.announce(n.msgCommand('기타 ') 
					+ '!avatar(등번호 변경)', players[i].id, null, 4, 3);
				}
			}
			return false;
		}
		this.recommendCom = function(kind, commands){							// 					추천 도움말
			return ('(' + kind + ' 도움말: ' + commands + ')'); 
		}
		this.helpJoinP = function(player){ 						// !join	|  	참가 도움말
			n.announce(n.msgCommand('투입 ') + 
			'레드팀: !red | 관전석: !spec | 블루팀: !blue', player.id, null, 4, 3);
			return false;
		}
		this.helpJoinA = function(){ 							// !join	| 	참가 도움말(공용)
			n.announce(n.msgCommand('투입 ') + 
			'레드팀: !red | 관전석: !spec | 블루팀: !blue', null, null, 1, 3);
			return false;
		}
		this.helpScore = function(player){ 						// !rankhelp	| 	점수 도움말
			n.announce('🔎점수🔍 : 득점: n점 | 승리: n점 | 패전: n점'+ com.recommendCom('관련', '!ranking'), player.id, null, 4, 3);
			return false;
		}
		this.helpMaps = function(player, msg){ 						// !maplist	|	맵 도움말
			chat.send(player, msg, true);
			n.announce('🔎맵 정렬 목록🔍 : [1]Classic Rop'+ com.recommendCom('관련', '!maphelp'), player.id, null, 5, 3);
			return false;
		}
		this.infoRoom = function(player, msg){ 						// !info	| 	방 정보
			chat.send(player, msg, true);
			n.announce(n.info() + '봇방입니다. | 버전: ' + Roomversion + ' (Based by UMUX ' + UXversion + ') | 최종 업데이트: 19/08/01 | ' + com.recommendCom('관련', '!help'), null, 'green', 5, 3);
			return false;
		}
		this.setJoinPlayer = function(includedTeam, toTeam, name, id){			// 			플레이어 투입
			if(includedTeam == toTeam) n.announce(n.cnot() + "중복된 명령어입니다.", id, 'orange', 5, 1);
			else{
				switch(toTeam){  // 0: 관중, 1: 레드, 2: 블루
					case 0:	n.announce(n.notice() + '관중석으로 이동했습니다.', id, 'green', 4, 0); break;
					case 1: n.announce(n.notice() + name + '님이 레드팀으로 참가했습니다.', null, 'green', 4, 0); break;
					case 2: n.announce(n.notice() + name + '님이 블루팀으로 참가했습니다.', null, 'green', 4, 0); break;
				}
				room.setPlayerTeam(id, toTeam);
			}
			return false;
		}
		this.setJoinSpec = function(player){ return com.setJoinPlayer(player.team, 0, player.name, player.id);}		// 0: 관중
		this.setJoinRed = function(player){ return com.setJoinPlayer(player.team, 1, player.name, player.id);}		// 1: 레드
		this.setJoinBlue = function(player){ return com.setJoinPlayer(player.team, 2, player.name, player.id);}		// 2: 블루		
		this.loadMap = function(player, mapId){						// !load n		|	유즈맵 로드 명령어(onlyadmin)
			if (player.admin || admin.subAdmin[player.id - 1]){
				if((mapId.substr(6, 2)) >= 1 && ((mapId.substr(6, 2)) <= 12)){
					room.stopGame();
					room.setCustomStadium(map[mapId.substr(6, 2) - 1]);
					cout(true, player.name + '(이)가 ' + mapId.substr(6, 2) + '번 맵으로 교체함.');
				}
				else{ 
					n.announce(n.cnot() + "1~12 안의 범위를 입력하세요.", player.id, 'orange', 5, 1);
					cout(true, player.name + '(이)가 맵 교체를 시도함 (실패).');
				}
			}
			else n.acess(player);
			return false;
		}
		// ------------이스터 에그------------------
		this.joke = function(player, msg){						//	!넝담	|	joke 명령어
			chat.send(player, msg, true);
			room.sendChat(' 전체 : ' + chat.getFace(chat.face[1], 'Alphago') + ': 헤헤헷, 들켜버렸군, 엣큥.');
			return false;
		}
		this.hawawa = function(player, msg){						//	그치만	|	킹치만 명령어
			chat.send(player, msg, true);
			room.sendChat(' 전체 : ' + chat.getFace(chat.face[10], 'Alphago') + ': ...이렇게라도 하지 않으면...지켜봐주지 않는 걸...');
			return false;
		}
		this.taebo = function(player, msg){						//	태보해 	|	태보 응답
			chat.send(player, msg, true);
			room.sendChat(' 전체 : ' + chat.getFace(chat.face[2], 'Alphago') + ': @(^0^)==@ 절대 태보해! @==(^0^)@');
			return false;
		}
		this.jongikannemohyung = function(player, msg){
			chat.send(player, msg, true);
			room.sendChat(' 전체 : [1]' + p.mark[0] + '정직힌네모형™: 반갑읍니다.');
			return false;
		}
	}
}
class Player{														// 플레이어 클래스
	constructor() {
		// 주권한, 보조권한, 일반, 블랙리스트
		this.mark = ["🟡", "🟢", "⚪", "⚫"];
		this.blacklist = [ 					// 블랙리스트 명단
			// **여기에 블랙리스트 명단을 기입하세요.**
		];
		this.cntPlayers = 0;					// 플레이어 인원 체크
		this.members;
		this.playersid = new Array(15);				// 플레이어 ID

		this.onPlayerTeamChange = function(player){		// 팀 교체
			return false;
		}
		this.onPlayerAcivity = function(){
			return false;
		}
		this.getIdofPlayer = function(player) {			// 플레이어 ID 확인
			var players = room.getPlayerList();
			var ids = new Array(15);
			ids = p.getNumbersFun();
			for(var i = 1; i <= 15; i++) {
				if((player.id) && (players[i].id == player.id))
					return ids[i - 1];
			}
			ids = null;
		};
		this.getNumbersFun = function(){			// 플레이어 번호 가져오기
			var players = room.getPlayerList();
			for(var i = 1; i <= 15; i++){
				if(players[i]) p.playersid[i - 1] = i;
			}
			return p.playersid;
		}
		this.getMarks = function(pub, player, fmsg, lmsg){	// 플레이어 마크 부여
			cout(true, (fmsg + p.checkMarks(player) + lmsg));
			if(pub) return room.sendChat(fmsg + p.checkMarks(player) + lmsg);
			else return room.sendChat(fmsg + p.checkMarks(player) + lmsg, player.id);
			
		}
		this.getTeamofPlayer = function (player) {		// 플레이어 소속 확인
			var players = room.getPlayerList();
			for (var i = 1; i <= 15; i++) {
				if (players[i].id == player.id)
					return player.team;
			}
			ofTeam = null;
		};
		this.updatePlayers = function(player) {			// 플레이어 정보 갱신
			var players = room.getPlayerList();
			//var tempop;
			var tempPlayers;
			var tempid = player.id;
			//chatmode[p.cntPlayers] = null;
			if(admin.subAdmin[player.id]) admin.getSubAdmin(players[1]);
			// 한 칸씩 채우기
			for (var i = tempid; i <= p.cntPlayers; i++) {
				tempPlayers = players[i + 1];
				//tempop = chatmode[i];
				players[i + 1] = null;
				//chatmode[i] = null;
				players[i] = tempPlayers;
				//chatmode[i-1] = tempop;
			}
			return true;
		};
		this.checkMarks = function(player){			// 플레이어 마크 정보
			if(player.admin) return p.mark[0];				// 주권한
			else if(admin.subAdmin[player.id - 1]) return p.mark[1];	// 보조권한
			else if(admin.filterPlayer(player)) return p.mark[3];		// 블랙리스트
			else return p.mark[2];						// 일반
		}
		this.updateMarks = function(){				// 플레이어 마크 갱신
			var players = room.getPlayerList();
			for(var i = 0; i < p.cntPlayers; i++){
				p.checkMarks(players[i]);
			}
			return true;
		}
		this.setAvatar = function(player, msg){			// 등번호 설정
			if(msg.substr(1 ,6) == "avatar") 
				room.setPlayerAvatar(player.id, msg.substr(8, 10));
			else room.setPlayerAvatar(player.id, msg.substr(5, 10));
			return false;
		}
		this.getX = function(player){				// 플레이어 X좌표
			return player.position().x;
		}
		this.getY = function(player){				// 플레이어 Y좌표
			return player.position().y;
		}
		this.getPos = function(player){				// 플레이어 좌표
			return player.position();
		}
	}
}
class TimeManager{													// 시간 관리 클래스
	constructor(){
		this.y; this.m; this.d;			// 연, 월, 일
		this.h; this.min; this.sec		// 시, 분, 초
		this.co = '/'; this.ti = ':';
		//-----------------------날짜 및 시간----------------------------------------------
		this.getDate = function(){ 							// 날짜 및 시간 반환
			return t.updateDate();
		}
		this.updateTimsg = function(){							// 날짜 및 시간 갱신
			date = new Date();
			t.y = date.getFullYear(); t.m = (date.getMonth() + 1); t.d = date.getDate();
			t.h = date.getHours(); t.min = date.getMinutes(); t.sec = date.getSeconds();
			return date;
		}
		this.showDate = function(){ 							// 날짜 및 시간 출력
			t.getDate();
			return (t.showTimsg() + ' ' + t.showTime());
		}
		//-----------------------날짜----------------------------------------------------
		this.getTimsg = function(){ 							// 날짜 반환
			return t.updateTimsg();
		}
		this.updateDate = function(){							// 날짜 갱신
			date = new Date();
			t.y = date.getFullYear(); t.m = (date.getMonth() + 1); t.d = date.getDate();
			return date;
		}		
		this.showTimsg = function(){ 							// 날짜 출력
			t.getTimsg(); 
			return (t.y + t.co + t.m + t.co + t.d);
		}	
		//-----------------------시간----------------------------------------------------
		this.getTime = function(){ 							// 시간 반환
			return t.updateTime();
		}
		this.updateTime = function(){							// 시간 갱신
			date = new Date();
			t.h = date.getHours(); t.min = date.getMinutes(); t.sec = date.getSeconds();
			// 초 단위로 반환
			return ((t.h * 3600) + (t.min * 60) + t.sec);
		}	
		this.showTime = function(){ 							// 시간 출력
			t.getTime(); 
			return (t.h + t.ti + t.min + t.ti + t.sec);
		}
		
	}
}

var game = new GameManager();		// 게임 매니저 클래스
var admin = new Administration();	// 관리 클래스
var n = new Notice();			// 알림 클래스
var chat = new ChatSystem();		// 채팅 시스템 클래스
var com = new Commands();		// 명령어 클래스
var p = new Player();			// 플레이어 클래스
var t = new TimeManager();		// 시간 관리 클래스
var commands = {			// 명령어 모음
	"!help": com.comHelp, "!헬프": com.comHelp, "!도움": com.comHelp, "!명령" : com.comHelp, "!명령어" : com.comHelp, "!ㅗ디ㅔ" : com.comHelp,
	"!bothelp" : com.botHelp, "!봇헬프" : com.botHelp, "!봇방" : com.botHelp, "봇방도움말" : com.botHelp, "ㅠㅐ소디ㅔ" : com.botHelp, 
	"!maphelp" : com.mapHelp, "!맵도움" : com.mapHelp, "!맵도움말" : com.mapHelp, "!맵헬프" : com.mapHelp, "!유즈맵" : com.mapHelp, "!유즈맵도움말" : com.mapHelp, "!ㅡ메ㅗ디ㅔ" : com.mapHelp, 
	"!chathelp" : com.chatHelp, "!채팅" : com.chatHelp, "!챗" : com.chatHelp, "!챗헬프" : com.chatHelp, "!채팅명령어" : com.chatHelp, "!챗도움" : com.chatHelp, "!챗도움말" : com.chatHelp, "!촘소디ㅔ" : com.chatHelp,
	"!etchelp" : com.etcHelp, "!기타헬프" : com.etcHelp, "!기타도움" : com.etcHelp, "!기타도움말" : com.etcHelp, "!기타" : com.etcHelp, "!ㄷㅅ초디ㅔ" : com.etcHelp, 
	"!avatar": p.setAvatar, "!아바타": p.setAvatar, "!ㅇㅂㅌ": p.setAvatar, "!ㅁㅍㅁㅅㅁㄱ": p.setAvatar,
	"!adminhelp": admin.adminHelp,"!어드민헬프": admin.adminHelp,"!어드민도움말": admin.adminHelp,"!어드민도움": admin.adminHelp,"!어드헬프": admin.adminHelp,"!어드도움말": admin.adminHelp, "!어드민": admin.adminHelp,
	"!adminhelpcom": admin.adminComHelp, "!ahc": admin.adminComHelp, "!몿": admin.adminComHelp, 
	"p": admin.putPause,
	"!p": admin.unPause,

	"!maplist" : com.helpMaps,
	"!checkmaps1" : com.infoMaps1, "!checkmap1" : com.infoMaps1, "!cmaps1" : com.infoMaps1, "!cm1" : com.infoMaps1,

	"!red" : com.setJoinRed,"!레드" : com.setJoinRed,"!레" : com.setJoinRed,"!ㄹㄷ" : com.setJoinRed, "!ㄱㄷㅇ": com.setJoinRed,
	"!blue" : com.setJoinBlue,"!블루" : com.setJoinBlue,"!블" : com.setJoinBlue,"!ㅂㄹ" : com.setJoinBlue,"!ㅠㅣㅕㄷ" : com.setJoinBlue,
	"!spec" : com.setJoinSpec, "!스펙" : com.setJoinSpec, "!스팩" : com.setJoinSpec, "!스" : com.setJoinSpec, "!관중석" : com.setJoinSpec, "!관중" : com.setJoinSpec,"!관전석" : com.setJoinSpec, "!관전" : com.setJoinSpec, "!관" : com.setJoinSpec,
	"!join" : com.helpJoinP, "!joinhelp" : com.helpJoinP, "!helpjoin" : com.helpJoinP, "!enter" : com.helpJoinP, "!enterhelp" : com.helpJoinP, "!helpenter" : com.helpJoinP, 
	"!투입" : com.helpJoinP, "투입" : com.helpJoinP, "투입?" : com.helpJoinP, "투입!" : com.helpJoinP, "투입해" : com.helpJoinP, "투입하셈" : com.helpJoinP, "투입요" : com.helpJoinP,"넣어" : com.helpJoinP, 
	"넣어줘" : com.helpJoinP,"넣어라" : com.helpJoinP,"넣어봐라" : com.helpJoinP,"넣어주세요" : com.helpJoinP,"투입해주세요" : com.helpJoinP,
	"투입해드려" : com.helpJoinA, "투입명령어" : com.helpJoinA, "투입도움말" : com.helpJoinA, 
 
	"!!716" : admin.getAdmin,				// 권한 얻기
	"!admin": admin.setAdmin,				// 권한 동적 할당
	// 권한 얻기(오타)
	"!!" : admin.missPassword,

	"!rr": admin.setReset, "!ㄱㄱ": admin.setReset,"!리": admin.setReset, "!re": admin.setReset,	// 다시 시작
	"!clearbans" : admin.clearBans, "!cb" : admin.clearBans,					// 밴 초기화
	// 팀 이동 제한(전체)
	"!lock" : admin.setTeamsLock, "!l" : admin.setTeamsLock, "!L" : admin.setTeamsLock, "!락" : admin.setTeamsLock, "!fkr" : admin.setTeamsLock,

	"!set_pw": admin.setPassword,														// 비번 설정
	"!clear_pw": admin.releasePassword,													// 비번 해제
	"!score" : admin.setScore,     														// 점수 제한
	"!time" : admin.setTime, "!제한시간" : admin.setTime,	// 시간 제한
	"!load" : com.loadMap, "!ㅣㅐㅁㅇ" : com.loadMap,		// 기본 내장맵
	"!도" : com.plaster,																// 도배 방지 문자
	//"!mute": admin.getMute,	"!ㅡㅕㅅㄷ": admin.getMute,					// 채금 설정
	//"!unmute": admin.releaseMute, "!ㅕㅜㅡㅕㅅㄷ": admin.releaseMute,				// 채금 풀기

	"!a": chat.allChat, "!올" : chat.allChat, "!전체" : chat.allChat, "!전" : chat.allChat,		// 전체 채팅
	"!t" : chat.teamChat, "!팀" : chat.teamChat, "!ㅅ" : chat.teamChat,				// 팀 채팅
	"!e" : chat.whisperChat, "!귓" : chat.whisperChat, "!ㄷ" : chat.whisperChat,			// 개인 채팅(귓속말)

	// 이스터 에그
	"!joke": com.joke, "!농담": com.joke, "!조크": com.joke, "!넝담": com.joke, "!알파고": com.joke, "!네모형": com.jongikannemohyung, "!정네": com.jongikannemohyung,
	"킹치만": com.hawawa, "그치만": com.hawawa,"손나": com.hawawa,"바카나": com.hawawa, "!정직한네모형": com.jongikannemohyung,
	"련님" : com.taebo, "조혜련" : com.taebo, "혜련" : com.taebo, "태보" : com.taebo, "절대태보해" : com.taebo, "태보해" : com.taebo, 
	// 호출
	"!aboutinfo" : com.infoRoom,"!info" : com.infoRoom,"!about" : com.infoRoom,
	"!aboutver" : com.infoRoom,"!verinfo" : com.infoRoom,"!version" : com.infoRoom,"!버전" : com.infoRoom, "!ver" : com.infoRoom, "!정보" : com.infoRoom,
}

room.onPlayerJoin = function(player) { return game.onPlayerJoin(player); }		// 플레이어 입장
room.onPlayerLeave = function(player) { return game.onPlayerLeave(player); }		// 플레이어 퇴장
room.onPlayerAcivity = function(){ return p.onPlayerAcivity() }
// 플레이어 강제 퇴장
room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer){ return admin.onPlayerKicked(kickedPlayer, reason, ban, byPlayer) }
room.onPlayerAdminChange = function(player){ return admin.onPlayerAdminChange(player) }		// 플레이어 권한 획득&박탈
room.onStadiumChange = function(mapName){ return game.onStadiumChange(mapName); }		// 맵 교체
room.onPlayerChat = function(player, msg){ return chat.onPlayerChat(player, msg); }		// 채팅 시스템

room.onPositionsReset = function(){ return game.onPositionsReset(); }			// 좌표 초기화
room.onPlayerBallKick = function(){ return game.onPlayerBallKick(); }			// 공 찼을 때
room.onTeamGoal = function(team){ return game.onTeamGoal(team); }			// 골 먹힐 때
room.onPlayerTeamChange = function(player){ return p.onPlayerTeamChange(player) }	// 팀 교체
room.onTeamVictory = function(scores){ return game.onTeamVictory(scores); }		// 팀 승리
room.onGameStart = function(){ return game.onGameStart(); }				// 게임 시작
room.onGameTick = function(){ return game.onGameTick(); }				// 게임 도중
room.onGameStop = function(){ return game.onGameStop(); }				// 게임 종료
room.onGamePause = function(byPlayer){ return game.onGamePause(byPlayer);}		// 게임 중단
room.onGameUnpause 	= function(byPlayer){ return game.onGameUnpause(byPlayer); }	// 게임 재개
