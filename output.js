//Thu Aug 08 2024 03:14:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var EC = {
  "isSlid": true,
  "Width": $(window).width(),
  "Init": function () {
    EC.Init.LazyLoad = new LazyLoad({});
    EC.Style.Footer();
    $(".gen-search").click(function () {
      $(".pop-1").addClass("show").siblings(".box-bg2").show();
      $("body").css({
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
      });
    });
    $(".gen-history").click(function () {
      $(".pop-2").addClass("show").siblings(".box-bg2").show();
      EC.Init.LazyLoad.update();
      $("body").css({
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
      });
    });
    $(".pop-bj").click(function () {
      $(".pop-list-body").removeClass("show").siblings(".box-bg2").hide();
      $("body").css({
        "height": "",
        "width": "",
        "overflow": ""
      });
    });
    $(".pop-2 span").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
      let _0x1348ca = $(".pop-2 span").index(this),
        _0x21dee2 = $(".history").eq(_0x1348ca);
      _0x21dee2.fadeIn(800).siblings().hide();
      _0x21dee2.addClass("check").siblings().removeClass("check");
      EC.Empty(EC.Cookie.Get("user_id")) ? $(".user-history").html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/Streamlab/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["0"] + "</span></div>" + "<a href=\"javascript:\" class=\"button top30 head-user\" style=\"width:100%\">" + language["1"] + "</a>") : $(".user-history li").length === 0 && EC.Ajax(maccms.path + "/index.php/api/history", "post", "json", "", function (_0x4c27b0) {
        if (_0x4c27b0.code === 1) {
          let _0x3e09dd = "";
          $.each(_0x4c27b0.list, function (_0x48e16e, _0x1e4796) {
            _0x3e09dd += "<li><a class=\"history-a flex\" href=\"" + _0x1e4796.data.link + "\" target=\"video\" title=\"" + _0x1e4796.data.name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x1e4796.data.name + "\" data-src=\"" + _0x1e4796.data.pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x1e4796.data.name + "</div><div><span class=\"cor5\">" + _0x1e4796.data.type.type_name + "</span></div></div></a></li>";
          });
          $(".user-history ul").html(_0x3e09dd);
          EC.Init.LazyLoad.update();
          Number($(".lang-bnt").length) === 1 && zh_tranBody();
        } else $(".user-history ul").html(EC.History.Msg);
      });
    });
    $(".user-share-button").click(function () {
      EC.Pop.Show($(".user-share-html").html(), language["3"], function () {});
    });
    let _0x5ea905 = $(".gen-loading"),
      _0x4115db = _0x5ea905.data("time");
    setTimeout(function () {
      $(".gen-loading").fadeOut("slow");
    }, _0x4115db);
    $(".head-more-a").hover(function () {
      $(".nav-more").html("&#xe564;");
      $(".head-more").show();
    }, function () {
      $(".nav-more").html("&#xe563;");
      $(".head-more").hide();
    });
    let _0x475419 = null,
      _0x1be26d = $(".head"),
      _0x473c9c = $(".row-2 .tim-box"),
      _0x5cc7ce = null;
    _0x1be26d.length > 0 && (_0x475419 = _0x1be26d.offset().top);
    _0x473c9c.length > 0 && (_0x5cc7ce = _0x473c9c.eq(_0x473c9c.length - 1).offset().top);
    $(window).scroll(EC.debounce(function () {
      let _0x47e0a1 = $(this).scrollTop();
      _0x1be26d.toggleClass("head-b", _0x47e0a1 > _0x475419).css("position", _0x47e0a1 > _0x475419 ? "fixed" : "");
      $(".head .left, .head .right").toggleClass("topfadeInUp animated", _0x47e0a1 > _0x475419);
      _0x47e0a1 > 300 ? $(".top").fadeIn(600) : $(".top").fadeOut(600);
      if (EC.Width > 991) {
        if (_0x47e0a1 > _0x5cc7ce) _0x473c9c.eq(_0x473c9c.length - 1).css({
          "position": "fixed",
          "top": "100px",
          "width": $(".row-2").width()
        });else {
          _0x473c9c.eq(_0x473c9c.length - 1).css({
            "position": "",
            "top": "",
            "width": ""
          });
        }
      }
    }, 50));
    $(".top").click(function () {
      $("html,body").animate({
        "scrollTop": 0
      }, 500);
      _0x1be26d.removeClass("head-b").css({
        "position": ""
      });
      $(".head .left,.head .right").removeClass("topfadeInUp animated");
    });
    if (Number($(".slid-e").length) === 1) {
      let _0x5b8efd = new Swiper(".swiper3", {
        "loop": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        },
        "on": {
          "slideChangeTransitionStart": function () {
            _0x1a1c59();
            $(".muted").off("click");
            $(".toReplay").off("click");
            $(".slid-e-video").removeClass("v-show");
            $(".slid-e-bj").removeClass("v-hidden");
          },
          "slideChangeTransitionEnd": function () {
            if ($(".wap-hide").is(":hidden") == false) {
              if (EC.isSlid) {
                EC.isSlid = false;
                setTimeout(function () {
                  EC.isSlid = true;
                  _0x32f965();
                }, 1000);
              }
            }
          }
        }
      });
      function _0x1a1c59() {
        let _0x124906 = Array.from(document.getElementsByClassName("preview"));
        for (let _0x2e5369 = 0; _0x2e5369 < _0x124906.length; _0x2e5369++) {
          const _0x3ff677 = _0x124906[_0x2e5369];
          _0x3ff677.pause();
          _0x3ff677.currentTime = 0;
        }
      }
      let _0x52d105 = 0;
      function _0x32f965() {
        let _0x1c73fe = document.querySelector(".slid-e").querySelector(".swiper-slide-active").querySelector("video"),
          _0x56d7f1 = $(".slid-e .swiper-slide-active");
        if (~~_0x1c73fe.duration > 10) {
          _0x56d7f1.find(".slid-e-video").addClass("v-show");
          _0x56d7f1.find(".slid-e-bj").addClass("v-hidden");
          _0x1c73fe.muted ? $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan") : $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin");
          $(".muted").click(function () {
            _0x1c73fe.muted ? ($(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x1c73fe.muted = false, _0x52d105 = 1) : ($(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan"), _0x1c73fe.muted = true, _0x52d105 = 0);
          });
          if (_0x52d105 === 1) {
            $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin");
            _0x1c73fe.muted = false;
          }
          $(".toReplay").click(function () {
            _0x56d7f1.find(".slid-e-video").addClass("v-show");
            _0x56d7f1.find(".slid-e-bj").addClass("v-hidden");
            _0x1c73fe.currentTime = 0;
            _0x1c73fe.play();
          });
          _0x1c73fe.play();
          _0x1c73fe.addEventListener("ended", function () {
            _0x56d7f1.find(".slid-e-video").removeClass("v-show");
            _0x56d7f1.find(".slid-e-bj").removeClass("v-hidden");
            _0x5b8efd.slideNext();
          });
        } else setTimeout(function () {
          _0x5b8efd.slideNext();
        }, 6000);
      }
    }
    let _0x55dac8 = $("#height_limit");
    _0x55dac8.height() >= 80 && (_0x55dac8.addClass("occlusion"), $(".text-open").show());
    $(".tim-bnt").click(function () {
      _0x55dac8.hasClass("height_rel") ? ($(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe563;</i>" + language["4"]), _0x55dac8.removeClass("height_rel"), _0x55dac8.addClass("occlusion")) : ($(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe564;</i>" + language["5"]), _0x55dac8.addClass("height_rel"), _0x55dac8.removeClass("occlusion"));
    });
    EC.Swiper.Navs();
    EC.Swiper.Slide();
    EC.Swiper.Roll();
    EC.Actor.Detail();
    $(".gen-left-list").click(function () {
      let _0x4e0c0e = $(".head-more").html(),
        _0x8678f2 = "bold0",
        _0x471e8 = "wap-show1",
        _0x4efb8b = $(".head-nav");
      _0x4efb8b.hasClass("bold1") && (_0x8678f2 = "bold1");
      _0x4efb8b.hasClass("wap-show0") && (_0x471e8 = "wap-show0");
      EC.Pop.Drawer("<div class='drawer-nav drawer-scroll " + _0x8678f2 + " " + _0x471e8 + "'><div class='drawer-scroll-list'>" + _0x4e0c0e + "</div></div>", function () {
        let _0x239c69 = $(".gen-account-menu").html();
        $(".drawer-list-box").prepend("<div class='drawer-menu cor2'>" + _0x239c69 + "</div>");
      });
    });
    $(".playBut").click(function () {
      let _0x5657ed = $(this).attr("data-url");
      $(".play-advance .topfadeInUp").html("<video id=\"xkPlayer\" width=\"100%\" height=\"100%\" controls preload=\"auto\" autoplay><source src=\"" + _0x5657ed + "\" type=\"video/mp4\"></video>");
      $(".play-advance").show();
    });
    $(".play-advance .box-bg,.play-advance .mfp-close").click(function () {
      let _0x167f25 = document.getElementById("xkPlayer");
      _0x167f25.currentTime = 0;
      _0x167f25.pause();
      $(".play-advance").hide();
      $(".mfp-iframe").remove();
    });
    $(".deployment").click(function () {
      let _0x34fb99 = $(".info-parameter").html();
      EC.Pop.Drawer(_0x34fb99, function () {
        $(".drawer-list-box").addClass("drawer-list-b bj3");
        $(document).on("click", ".drawer-of", function () {
          EC.Pop.DrawerDel();
        });
      });
    });
    $(".wap-diy-vod-e .vod-link").hover(function () {
      $(this).addClass("box");
      $(this).children(".vod-no-dom-show").hide();
      $(this).children(".vod-no-dom").show();
    }, function () {
      $(this).removeClass("box");
      $(this).children(".vod-no-dom-show").show();
      $(this).children(".vod-no-dom").hide();
    });
    $("#BuyPopEdom").click(function () {
      let _0x468421 = $(this);
      _0x468421.attr("data-id") && confirm(language["6"]) && EC.Ajax(maccms.path + "/index.php/user/ajax_buy_popedom.html?id=" + _0x468421.attr("data-id") + "&mid=" + _0x468421.attr("data-mid") + "&sid=" + _0x468421.attr("data-sid") + "&nid=" + _0x468421.attr("data-nid") + "&type=" + _0x468421.attr("data-type"), "get", "json", "", function (_0x352cef) {
        _0x468421.addClass("disabled");
        _EC.Pop.Msg(_0x352cef.msg);
        Number(_0x352cef.code) === 1 && top.location.reload();
        _0x468421.removeClass("disabled");
      });
    });
    $("#check").click(function () {
      let _0x34030d = $(this);
      _0x34030d.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/pwd.html?id=" + _0x34030d.attr("data-id") + "&mid=" + _0x34030d.attr("data-mid") + "&type=" + _0x34030d.attr("data-type") + "&pwd=" + _0x34030d.parents("form").find("input[name=\"pwd\"]").val(), "get", "json", "", function (_0x1e05e7) {
        _0x34030d.addClass("disabled");
        _EC.Pop.Msg(_0x1e05e7.msg);
        Number(_0x1e05e7.code) === 1 && location.reload();
        _0x34030d.removeClass("disabled");
      });
    });
    switch (maccms.aid) {
      case "12":
      case "11":
        let _0x49869a = $("#dataList");
        if (_0x49869a.length > 0) {
          let _0x4cb751 = _0x49869a.data(),
            _0xfb771 = {
              "type": _0x4cb751.type,
              "class": _0x4cb751.class,
              "area": _0x4cb751.area,
              "lang": _0x4cb751.lang,
              "version": _0x4cb751.version,
              "state": _0x4cb751.state,
              "letter": _0x4cb751.letter
            };
          $(".ec-casc-list .swiper-slide").click(function () {
            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
            EC.Swiper.Navs();
            _0xfb771[$(this).data("type")] = $(this).data("val");
            if (EC.Empty($(this).data("type"))) return;
            _0x49869a.html("");
            HTML.Skeleton(_0x49869a, 3, _0x4cb751.tpl);
            EC.flow.get(_0xfb771, _0x49869a, _0x4cb751, function () {});
          });
          $(".site-tabs a").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            if (Number($("#dataList .null").length) === 1) return;
            _0xfb771.by = $(this).data("type");
            _0x49869a.html("");
            HTML.Skeleton(_0x49869a, 3, _0x4cb751.tpl);
            EC.flow.get(_0xfb771, _0x49869a, _0x4cb751, function () {});
          });
          HTML.Skeleton(_0x49869a, 3, _0x4cb751.tpl);
          _0xfb771[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0xfb771, _0x49869a, _0x4cb751, function () {});
        }
        break;
      case "14":
      case "104":
      case "15":
        $(".anthology-tab a").click(function () {
          $(this).addClass("on nav-dt").siblings().removeClass("on nav-dt");
          let _0x51b30e = $(".anthology-tab a").index(this),
            _0x1ea2ff = $(".anthology-list .none").eq(_0x51b30e);
          _0x1ea2ff.fadeIn(800).siblings().hide();
          _0x1ea2ff.addClass("dx").siblings().removeClass("dx");
          EC.Swiper.Navs();
        }), $("#zxdaoxu").each(function () {
          $(this).on("click", function (_0x2eaa9b) {
            _0x2eaa9b.preventDefault();
            $(".dx").each(function () {
              let _0x1cb82a = $(this).find("li");
              for (let _0x3c7f35 = 0, _0x2c2c64 = _0x1cb82a.length - 1; _0x3c7f35 < _0x2c2c64;) {
                let _0x2523c0 = _0x1cb82a.eq(_0x3c7f35).clone(true),
                  _0x295cd0 = _0x1cb82a.eq(_0x2c2c64).replaceWith(_0x2523c0);
                _0x1cb82a.eq(_0x3c7f35).replaceWith(_0x295cd0);
                ++_0x3c7f35;
                --_0x2c2c64;
              }
            });
          });
        }), $("#role .public-list-box").click(function () {
          let _0x444ca0 = $(this).index(),
            _0x1fdce8 = $("#role .cor5").eq(_0x444ca0).text(),
            _0x344cc9 = $("#role .time-title").eq(_0x444ca0).text(),
            _0xdbdc36 = $("#role .lazy").eq(_0x444ca0).data(),
            _0x4d0761 = _0xdbdc36.text;
          _0x4d0761.length < 1 && (_0x4d0761 = language["7"]);
          let _0x4d7e43 = "<div class=\"role-card\"><div class=\"card-top flex\"><div class=\"left\"><img class=\"lazy\" src=\"" + _0xdbdc36.src + "\" alt=\"" + _0x344cc9 + "\"></div>\n" + "<div class=\"right\"><p>" + _0x344cc9 + "</p><p class=\"cor5\">" + _0x1fdce8 + "</p></div></div> \n" + "<div class=\"card-bottom\"><p class=\"card-title\">" + language["8"] + "</p><div class=\"card-text cor5\">" + _0x4d0761 + "</div></div></div>";
          EC.Pop.Show(_0x4d7e43, language["9"], function () {});
        }), $(".vod-detail .vod-detail-bnt .button").click(function () {
          location.href = $(".anthology-list-play a").eq(0).attr("href");
        }), $(".player-button-ac").click(function () {
          $(".anthology-list").toggleClass("player-list-ac");
        }), $(".play-tips-bnt").click(function () {
          $(".tips-box").slideToggle();
          $(".charge,.player-share-box").hide();
        }), $(".ec-report").click(function () {
          let _0x38e701 = $(this).data();
          EC.Gbook.Report(_0x38e701);
        }), $(".charge-button").click(function () {
          $(".charge").fadeToggle();
          $(".player-share-box,.tips-box").hide();
        });
        $(".comment-form").length < 1 && (EC.Comment.Login = $(this).data().login, EC.Comment.Verify = $(this).data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        $("#expand_details").click(function () {
          $(".player-vod-box").hide();
          $(".player-list-box").hide();
          $(".player-details-box").show();
        }), $(".player-close").click(function () {
          $(".player-vod-box").show();
          $(".player-list-box").show();
          $(".player-details-box").hide();
          $(".player-return .none").hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        }), $(".player-vod-no1 .public-list-box").click(function () {
          $(".player-return .none").show();
          $(".player-vod-no1").hide();
          $(".player-vod-no2").show();
          EC.Ajax(maccms.path + "/index.php/api/actor_vod_player_api?id=" + $(this).attr("data-id"), "get", "json", "", function (_0x513f65) {
            if (Number(_0x513f65.code) === 1) {
              let _0x4f61ed = "";
              $.each(_0x513f65.list, function (_0x8fac7f, _0x20e321) {
                _0x4f61ed = _0x4f61ed + "<div class=\"public-list-box public-pic-b\"><div class=\"public-list-div\"><a class=\"public-list-exp\" href=\"" + _0x20e321.url + "\" title=\"" + _0x20e321.name + "\">" + "<img referrerpolicy=\"no-referrer\" class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" alt=\"" + language["10"] + "\" data-src=\"" + _0x20e321.pic + "\" /></a>\n" + "<i class=\"collection fa\" data-type=\"2\" data-mid=\"" + maccms.mid + "\" data-id=\"" + _0x20e321.id + "\">&#xe577;</i></div>\n" + "<div class=\"public-list-button\"><a target=\"_blank\" class=\"time-title hide ft4\" href=\"" + _0x20e321.url + "\" title=\"" + _0x20e321.name + "\">" + _0x20e321.name + "</a></div></div>";
              });
              $(".player-vod-no2").html("<div class=\"role-card top20\">" + _0x513f65.html + "</div><div class=\"title-m cor4\"><h5>" + language["11"] + "</h5></div><div class=\"flex wrap border-box hide-b-16 wap-diy-vod-a\">" + _0x4f61ed + "</div>");
              EC.Init.LazyLoad.update();
            } else _EC.Pop.Msg(language["12"], "", "error");
          });
        }), $(".player-return .none").click(function () {
          $(this).hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        });
        if (Number(maccms.jx) === 1) {
          let _0x28c6ac = $(".line-switch");
          EC.player.player_jx(_0x28c6ac.attr("data-api"), _0x28c6ac.attr("data-url"));
          $(".vod-playerUrl").click(function () {
            _0x28c6ac.html("");
            EC.player.player_jx(_0x28c6ac.attr("data-api"), $(this).attr("data-form"));
          });
          $(document).on("click", ".line-switch a", function () {
            $(this).addClass("bj2").siblings().removeClass("bj2");
            maccms.jx_index = $(this).index();
            $("#playleft iframe").attr("src", $(this).attr("data-api") + MacPlayer.PlayUrl);
            _EC.Pop.Msg(language["13"], "", "success");
          });
        }
        break;
      case "4":
        EC.Gbook.Init();
        break;
      case "24":
        $(".tim-content img").touchTouch();
        let _0x59edb7 = $(".ds-comment");
        Number(_0x59edb7.length) === 1 && (EC.Comment.Login = _0x59edb7.data().login, EC.Comment.Verify = _0x59edb7.data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        break;
      case "21":
        let _0x164ce8 = $("#dataList");
        if (_0x164ce8.length > 0) {
          let _0x52f355 = _0x164ce8.data();
          HTML.Skeleton(_0x164ce8, 3, _0x52f355.tpl);
          let _0xd82e7b = {
            "type": _0x52f355.type
          };
          EC.flow.get(_0xd82e7b, _0x164ce8, _0x52f355, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "23":
        let _0x340533 = $("#dataList");
        if (_0x340533.length > 0) {
          let _0x29f1d6 = _0x340533.data();
          HTML.Skeleton(_0x340533, 3, _0x29f1d6.tpl);
          let _0x512fb4 = {
            "wd": _0x29f1d6.type,
            "tag": _0x29f1d6.wdtag
          };
          EC.flow.get(_0x512fb4, _0x340533, _0x29f1d6, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "84":
        $(".art-so-tag").click(function () {
          let _0x45cfc6 = $("#dataList"),
            _0x53cf7e = _0x45cfc6.data();
          _0x45cfc6.html("");
          HTML.Skeleton(_0x45cfc6, 3, _0x53cf7e.tpl);
          let _0x4c1178 = {
            "wd": _0x53cf7e.type,
            "tag": _0x53cf7e.wdtag
          };
          EC.flow.get(_0x4c1178, _0x45cfc6, _0x53cf7e, function () {
            EC.Swiper.Roll();
          });
        });
        break;
      case "82":
        let _0x5cca81 = $("#dataList");
        if (_0x5cca81.length > 0) {
          let _0x4c1cca = _0x5cca81.data(),
            _0xee5656 = {
              "type": _0x4c1cca.type
            };
          $(".ec-casc-list .swiper-slide").click(function () {
            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
            EC.Swiper.Navs();
            _0xee5656[$(this).data("type")] = $(this).data("val");
            _0x5cca81.html("");
            HTML.Skeleton(_0x5cca81, 3, _0x4c1cca.tpl);
            EC.flow.get(_0xee5656, _0x5cca81, _0x4c1cca, function () {});
          });
          HTML.Skeleton(_0x5cca81, 3, _0x4c1cca.tpl);
          _0xee5656[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0xee5656, _0x5cca81, _0x4c1cca, function () {});
        }
        break;
      case "302":
        let _0x838222 = $("#dataList");
        if (_0x838222.length > 0) {
          let _0x78e796 = _0x838222.data(),
            _0x112f13 = {};
          $(".ec-casc-list .swiper-slide").click(function () {
            $(".swiper-slide").removeClass("nav-dt");
            $(this).addClass("nav-dt");
            EC.Swiper.Navs();
            _0x112f13.type = $(this).data("id");
            _0x838222.html("");
            HTML.Skeleton(_0x838222, 3, _0x78e796.tpl);
            EC.flow.get(_0x112f13, _0x838222, _0x78e796, function () {});
          });
          HTML.Skeleton(_0x838222, 3, _0x78e796.tpl);
          _0x112f13[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0x112f13, _0x838222, _0x78e796, function () {});
        }
        break;
    }
    Number(maccms.mid) === 11 && ($(".web-so-btn").click(function () {
      let _0x10e4c5 = $(".website-val").val();
      _0x10e4c5 ? window.open($(".website-filter-grid .action").attr("data-url") + _0x10e4c5) : _EC.Pop.Msg(language["14"], "", "error");
    }), $(".website-filter-grid .icon").click(function () {
      $(".website-filter-grid .action").removeClass("action");
      $(this).addClass("action");
    }), $(".togo").click(function () {
      let _0x5aed0a = $(this).attr("data-id"),
        _0x4a4f2d = $(this).attr("data-mi");
      Number(_0x4a4f2d) === 1 ? _EC.Pop.Msg(language["15"], "", "error") : EC.Ajax(maccms.path + "/index.php/api/website?id=" + _0x5aed0a, "get", "json", "", function (_0x5b39b0) {
        _0x5b39b0.smg === 1 ? EC.Pop.Show("<div class=\"website-title\">" + _0x5b39b0.data.website_name + "</div><div class=\"card-text cor5\"><p>" + _0x5b39b0.data.website_blurb + "</p><p>" + _0x5b39b0.data.website_content + "</p></div><div class=\"flex website-tag top20\">" + _0x5b39b0.data.website_tag + "</div>", language["20"], function () {}) : _EC.Pop.Msg(language["15"], "", "error");
      });
    }), $("#tou_gao").click(function () {
      if (Number(EC.User.IsLogin) === 0) {
        EC.User.Login();
        return;
      }
      EC.Pop.Show("<form class=\"tg-form\"><p class=\"cor5 top10\">" + language["16"] + "</p><div class=\"region nav-link textarea bj\">\n" + "<textarea class=\"tg-content cor5\" name=\"gbook_content\" style=\"width:100%;height:100%\"></textarea>\n" + "</div><div class=\"flex\"><input type=\"text\" class=\"input bj br cor5\" name=\"verify\" value=\"\" maxlength=\"4\" size=\"20\">\n" + "<img class=\"ds-verify-img\" src=\"/index.php/verify/index.html\" alt=\"" + language["19"] + "\" onclick=\"this.src = this.src+'?'\"></div>\n" + "<input type=\"button\" class=\"tg-submit button top20 submit_btn\" style=\"width:100%\" value=\"" + language["17"] + "\"></form>", language["18"], function () {
        $(".tg-submit").click(function () {
          EC.Gbook.Tg();
        });
      });
    }));
    $("#website_user").click(function () {
      $.ajax({
        "url": window.location.href + "&pdw=" + $("#website_password").val(),
        "type": "post",
        "dataType": "json",
        "success": function (_0xa6b06f) {
          Number(_0xa6b06f.smg) === 1 ? window.location.replace(_0xa6b06f.url) : window.location.replace("https://www.kugou.com/song/#hash=8C1A6044DDF1650A82B42769C47FD645&album_id=501600");
        }
      });
    });
    $(".jp-download").click(function () {
      let _0x2b10fc = "<p class=\"cor5 top10\">" + language["21"] + "</p><div class=\"region nav-link textarea bj\"><textarea id=\"bar2\" class=\"cor5\" style=\"width:100%;height:100%\">" + language["22"] + "《" + ecData.list[ecData.playid].name + "》" + language["23"] + ecData.list[ecData.playid].url + "</textarea></div>\n" + "<button type=\"button\" class=\"button copyBtn\" style=\"width:100%\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar2\">" + language["24"] + "</button>";
      EC.Pop.Show(_0x2b10fc, language["25"], function () {
        $(document).on("click", ".copyBtn", function () {
          _EC.Pop.Msg(language["26"], "", "success");
          $(".window").remove();
        });
      });
    });
    $(".ds-pop").length > 0 && EC.Empty(EC.Cookie.Get("ecPopup")) && (EC.Cookie.Set("ecPopup", 1, 1), $("#notice").show(), $("#notice .box-bg,#notice .button").click(function () {
      $("#notice").hide();
    }));
    $(".player-switch").click(function () {
      let _0x15d9b6 = $(".player");
      if (_0x15d9b6.hasClass("player-switch-box")) {
        $(this).html("&#xe565;");
        _0x15d9b6.removeClass("player-switch-box");
      } else $(this).html("&#xe566;"), _0x15d9b6.addClass("player-switch-box");
    });
    const _0x1b6321 = " %c \u77ED\u89C6\u4E3B\u9898 by \u8349\u6839\xAE %c QQ602524950|906259831\uFF08\u4E25\u7981\u5229\u7528\u4E3B\u9898\u5EFA\u8BBE\u8FDD\u6CD5\u7F51\u7AD9\uFF09 ";
    console.log("\n" + _0x1b6321 + "\n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;", "background: #fadfa3; padding:5px 0; font-size:18px;");
    if ($(".week-title").length > 0) {
      let _0x4e75f5 = ["一", "二", "三", "四", "五", "六", "日"],
        _0x2f27d0 = new Date().getDay();
      _0x2f27d0 === 0 && (_0x2f27d0 = 7);
      let _0x3abd0b = $("#week-list" + _0x2f27d0),
        _0x374607 = _0x3abd0b.children();
      _0x3abd0b.show();
      $(".week-bj").addClass("week-" + _0x2f27d0);
      $(".week-key" + _0x2f27d0).addClass("tim");
      let _0x55674e = $("#dataList"),
        _0xb09fb7 = _0x55674e.data(),
        _0x176142 = {
          "weekday": _0x4e75f5[_0x2f27d0 - 1],
          "num": _0xb09fb7.num,
          "by": _0xb09fb7.by,
          "type": _0xb09fb7.type
        };
      HTML.Skeleton(_0x374607, 3, "vod");
      _0x562548(_0x176142, _0x374607, _0xb09fb7);
      $(".week-title .week-select a").click(function () {
        $(this).addClass("tim").siblings().removeClass("tim");
        let _0x155f62 = $(this).data();
        $(".week-bj").removeClass("week-1 week-2 week-3 week-4 week-5 week-6 week-7").addClass("week-" + _0x155f62.index);
        $(".wow").hide();
        _0x3abd0b = $("#week-list" + _0x155f62.index);
        _0x3abd0b.show();
        _0x374607 = _0x3abd0b.children();
        if (_0x374607.html().length > 50) return;
        _0x176142.weekday = _0x155f62.val;
        HTML.Skeleton(_0x374607, 3, "vod");
        _0x562548(_0x176142, _0x374607, _0xb09fb7);
      });
    }
    function _0x562548(_0x59a5b1, _0x36dd2d, _0x2b4f8d) {
      setTimeout(function () {
        let _0x332859 = [],
          _0x4496c3 = Math.round(new Date() / 1000),
          _0x2a36b4 = _0x59a5b1;
        _0x2a36b4.time = _0x4496c3;
        _0x2a36b4.key = EC.Md5(_0x4496c3);
        EC.Ajax(_0x2b4f8d.api, "post", "json", _0x2a36b4, function (_0x8ac6ea) {
          if (Number(_0x8ac6ea.code) === 1) {
            _0x332859 = HTML.Art(_0x8ac6ea, _0x2b4f8d);
            if (EC.flow.empty(_0x8ac6ea.list.length, _0x36dd2d)) return;
            _0x36dd2d.html(_0x332859.join(""));
            EC.Init.LazyLoad.update();
            EC.Style.Footer();
            $(".lang-bnt").length === 1 && zh_tranBody();
          } else Number(_0x8ac6ea.code) === 2 ? $(".flow-more").html(_0x8ac6ea.msg) : _EC.Pop.Msg(language["27"] + _0x8ac6ea.msg, "", "error");
        }, function () {
          _EC.Pop.Msg(language["28"], "", "error");
        });
      }, 100);
    }
  },
  "Style": {
    "Init": function () {
      let _0x3047b8 = $(".theme-style"),
        _0x4ce7d0 = EC.Cookie.Get("ec-wap_style");
      !EC.Empty(_0x4ce7d0) && ($("body").attr("class", _0x4ce7d0), _0x4ce7d0 === "theme1" ? _0x3047b8.html("&#xe574;").attr("data-id", 1) : _0x3047b8.html("&#xe575;").attr("data-id", 2));
      _0x3047b8.click(function () {
        EC.Style.Switch(_0x3047b8);
      });
    },
    "Set": function (_0x123253) {
      EC.Cookie.Set("ec-wap_style", _0x123253);
    },
    "Switch": function (_0x36377b) {
      let _0x483336 = _0x36377b.attr("data-id");
      if (Number(_0x483336) === 1) $("body").attr("class", "theme2"), _0x36377b.html("&#xe575;").attr("data-id", 2), EC.Style.Set("theme2");else {
        $("body").attr("class", "theme1");
        _0x36377b.html("&#xe574;").attr("data-id", 1);
        EC.Style.Set("theme1");
      }
    },
    "Footer": function () {
      $(".footer-bottom").removeClass("footerLess");
      $(document.body).height() < $(window).height() ? $(".footer-bottom").addClass("footerLess") : $(".footer-bottom").removeClass("footerLess");
    }
  },
  "Cookie": {
    "Set": function (_0x35d643, _0x1ae4ca, _0x806a33) {
      let _0x4d7087 = new Date();
      _0x4d7087.setTime(_0x4d7087.getTime() + _0x806a33 * 24 * 60 * 60 * 1000);
      document.cookie = _0x35d643 + "=" + encodeURIComponent(_0x1ae4ca) + ";path=/;expires=" + _0x4d7087.toUTCString();
    },
    "Get": function (_0x281898) {
      let _0x241b5f = document.cookie.match(new RegExp("(^| )" + _0x281898 + "=([^;]*)(;|$)"));
      if (_0x241b5f != null) return decodeURIComponent(_0x241b5f[2]);
    },
    "Del": function (_0x13c41f) {
      let _0xaac40a = new Date();
      _0xaac40a.setTime(_0xaac40a.getTime() - 1);
      let _0x1dfde0 = this.Get(_0x13c41f);
      _0x1dfde0 != null && (document.cookie = _0x13c41f + "=" + encodeURIComponent(_0x1dfde0) + ";path=/;expires=" + _0xaac40a.toUTCString());
    }
  },
  "Empty": function (_0xc8aaa8) {
    return _0xc8aaa8 == null || _0xc8aaa8 === "";
  },
  "debounce": function (_0x2720a8, _0x12d7a6) {
    let _0x194e5c = null;
    return function () {
      let _0x1290b4 = this,
        _0x815610 = arguments;
      clearTimeout(_0x194e5c);
      _0x194e5c = setTimeout(function () {
        _0x2720a8.apply(_0x1290b4, _0x815610);
      }, _0x12d7a6);
    };
  },
  "GoBack": function () {
    let _0x1f13d1 = document.domain;
    document.referrer.indexOf(_0x1f13d1) > 0 ? history.back() : window.location = "//" + _0x1f13d1;
  },
  "Ajax": function (_0x5cc7a0, _0x3c9aae, _0x511ea5, _0x8db3d8, _0x3431ff, _0x30d3fb, _0x3ef089) {
    _0x3c9aae = _0x3c9aae || "get";
    _0x511ea5 = _0x511ea5 || "json";
    _0x8db3d8 = _0x8db3d8 || "";
    _0x30d3fb = _0x30d3fb || "";
    _0x3ef089 = _0x3ef089 || "";
    $.ajax({
      "url": _0x5cc7a0,
      "type": _0x3c9aae,
      "dataType": _0x511ea5,
      "data": _0x8db3d8,
      "timeout": 5000,
      "beforeSend": function (_0x56be9a) {},
      "error": function (_0x1ae3db, _0x132c3d, _0x543e8b) {
        if (_0x30d3fb) _0x30d3fb(_0x1ae3db, _0x132c3d, _0x543e8b);
      },
      "success": function (_0x584840) {
        _0x3431ff(_0x584840);
      },
      "complete": function (_0x43768d, _0x5e0f90) {
        if (_0x3ef089) _0x3ef089(_0x43768d, _0x5e0f90);
      }
    });
  },
  "flow": {
    "load": function (_0x1a7bb2) {
      _0x1a7bb2 = _0x1a7bb2 || {};
      let _0x100594 = this,
        _0x3d50a1 = 0,
        _0xe8b1b9,
        _0x30f606,
        _0x41262a,
        _0x428ec5 = $(_0x1a7bb2.elem);
      if (!_0x428ec5[0]) return;
      let _0x1ddc22 = $(_0x1a7bb2.scrollElem || document),
        _0x2fc05d = _0x1a7bb2.mb || 50,
        _0x49e573 = "isAuto" in _0x1a7bb2 ? _0x1a7bb2.isAuto : true,
        _0xda3f59 = _0x1a7bb2.end || language["29"],
        _0x51060d = _0x1a7bb2.scrollElem && _0x1a7bb2.scrollElem !== document,
        _0x381f32 = "<i class=\"fa ds-jiantouyou\"></i>" + language["30"],
        _0xee9bb0 = $("<div class=\"flow-more cor5\"><a href=\"javascript:;\">" + _0x381f32 + "</a></div>");
      if (!_0x428ec5.find(".flow-more")[0]) {
        _0x428ec5.append(_0xee9bb0);
      }
      let _0x424caa = function (_0xa3beb, _0x2a4ba8) {
          Number(_0x3d50a1) === 1 && $(".flow-more").siblings().remove();
          _0xa3beb = $(_0xa3beb);
          _0xee9bb0.before(_0xa3beb);
          _0x2a4ba8 = Number(_0x2a4ba8) === 0 ? true : null;
          _0x2a4ba8 ? _0xee9bb0.html(_0xda3f59) : _0xee9bb0.find("a").html(_0x381f32);
          _0x30f606 = _0x2a4ba8;
          _0xe8b1b9 = null;
          EC.Init.LazyLoad.update();
        },
        _0x798a1f = function () {
          _0xe8b1b9 = true;
          _0xee9bb0.find("a").html("<i class=\"loading3\"></i>" + language["31"]);
          typeof _0x1a7bb2.done === "function" && _0x1a7bb2.done(++_0x3d50a1, _0x424caa, _0x428ec5);
        };
      _0x798a1f();
      _0xee9bb0.find("a").on("click", function () {
        if (_0x30f606) return;
        _0xe8b1b9 || _0x798a1f();
      });
      if (!_0x49e573) return _0x100594;
      return _0x1ddc22.off("scroll"), _0x1ddc22.on("scroll", function () {
        let _0x16b941 = $(this),
          _0x57ab43 = _0x16b941.scrollTop();
        if (_0x41262a) clearTimeout(_0x41262a);
        if (_0x30f606 || !_0x428ec5.width()) return;
        _0x41262a = setTimeout(function () {
          let _0x199a14 = _0x51060d ? _0x16b941.height() : $(window).height(),
            _0x5b59f5 = _0x51060d ? _0x16b941.prop("scrollHeight") : document.documentElement.scrollHeight;
          _0x5b59f5 - _0x57ab43 - _0x199a14 <= _0x2fc05d && (_0xe8b1b9 || _0x798a1f());
        }, 100);
      }), _0x100594;
    },
    "empty": function (_0x451b90, _0x4dd381) {
      if (Number(_0x451b90) === 0) {
        return _0x4dd381.html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/Streamlab/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["32"] + "</span></div>"), true;
      }
      return false;
    },
    "get": function (_0x36ae94, _0x484bbb, _0x5412e7, _0x154d20) {
      _0x484bbb.length > 0 && EC.flow.load({
        "elem": "#dataList",
        "isAuto": _0x5412e7.pattern,
        "end": _0x5412e7.txt,
        "done": function (_0x255d9f, _0x56a36d, _0x49ea9f) {
          setTimeout(function () {
            let _0x3d3745 = [],
              _0x49242a = Math.ceil(new Date().getTime() / 1000),
              _0x5b53d0 = $.extend(_0x36ae94, {
                "page": _0x255d9f,
                "time": _0x49242a,
                "key": EC.Md5(_0x49242a)
              });
            EC.Ajax(_0x5412e7.api, "post", "json", _0x5b53d0, function (_0x9a38a8) {
              if (Number(_0x9a38a8.code) === 1) {
                if (EC.flow.empty(_0x9a38a8.list.length, _0x49ea9f)) return;
                _0x3d3745 = HTML.Art(_0x9a38a8, _0x5412e7);
                _0x56a36d(_0x3d3745.join(""), _0x255d9f < _0x9a38a8.pagecount);
                _0x154d20();
                EC.Style.Footer();
                if ($(".lang-bnt").length === 1) {
                  zh_tranBody();
                }
              } else {
                if (Number(_0x9a38a8.code) === 2) $(".flow-more").html(_0x9a38a8.msg);else {
                  _EC.Pop.Msg(language["27"] + _0x9a38a8.msg, "", "error");
                }
              }
            }, function () {
              _EC.Pop.Msg(language["28"], "", "error");
            });
          }, 100);
        }
      });
    }
  },
  "Copy": {
    "Init": function () {
      EC.Width < 767 ? ($(".play-score").click(function () {
        EC.Pop.Show($("#rating").prop("outerHTML"), "为本片评分", function () {});
      }), $(".vod-detail-share").click(function () {
        $(".vod-detail .share-box").remove();
        let _0x1510d6 = "<div class=\"cor5 radius\"><span class=\"share-tips\">" + language["34"] + "</span><span id=\"bar\" class=\"share-url bj cor5\">" + window.location.href + $(document).attr("title") + "</span><button type=\"button\" class=\"share-copy bj2 ho radius copyBtn\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar\">" + language["35"] + "</button></div>";
        EC.Pop.Show(_0x1510d6, language["18"], function () {
          $(document).on("click", ".copyBtn", function () {
            _EC.Pop.Msg(language["36"], "", "success");
            $(".window").remove();
          });
        });
        new ClipboardJS(".copyBtn");
      })) : ($(".share-url").html(window.location.href + $(document).attr("title")), new ClipboardJS(".copyBtn"), EC.Copy.Qrcode(), $(".vod-detail-share").hover(function () {
        $(".vod-detail .share-box").show();
        $(document).on("click", ".copyBtn", function () {
          $(".vod-detail .share-box").hide();
          _EC.Pop.Msg(language["36"], "", "success");
        });
      }, function () {
        $(".vod-detail .share-box").hide();
      }));
      $(".player-share-button").click(function () {
        $(".player-share-box").fadeToggle();
        $(".charge,.tips-box").hide();
        $(".player-share-box .copyBtn").click(function () {
          _EC.Pop.Msg(language["36"], "", "success");
          $(".player-share-box").slideUp();
        });
      });
      let _0x23ce48 = new ClipboardJS(".CopyUel");
      $(".CopyUel").click(function () {
        _0x23ce48.on("success", function () {
          _EC.Pop.Msg(language["37"], "", "success");
        });
        _0x23ce48.on("error", function () {
          _EC.Pop.Msg(language["38"], "", "error");
        });
      });
    },
    "Qrcode": function () {
      $(".hl-cans").each(function () {
        if ($(this).length) {
          $(this).qrcode({
            "width": 120,
            "height": 120,
            "text": encodeURI(window.location.href)
          });
          function _0x3010c1(_0x2e3b2b) {
            let _0x7a75a7 = new Image();
            return _0x7a75a7.src = _0x2e3b2b.toDataURL("image/png"), _0x7a75a7;
          }
          let _0x519c9b = $("canvas")[0],
            _0x1f36cc = _0x3010c1(_0x519c9b);
          $(this).next(".share-pic").append(_0x1f36cc);
        }
      });
    }
  },
  "Swiper": {
    "Navs": function () {
      new Swiper(".nav-swiper", {
        "observer": true,
        "freeMode": true,
        "slidesPerView": "auto",
        "direction": "horizontal",
        "on": {
          "init": function () {
            EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
          },
          "observerUpdate": function () {
            EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
          }
        }
      });
    },
    "Nav": function (_0x5282f2, _0x4182bb, _0x146415) {
      if (_0x5282f2.find(".nav-dt").length > 0) {
        let _0x328378 = _0x5282f2.find(".nav-dt").outerWidth(true),
          _0x27428c = _0x5282f2.find(".nav-dt")[0].offsetLeft,
          _0x2d1814 = _0x4182bb.parent().outerWidth(true),
          _0x14ad9a = parseInt(_0x146415);
        _0x4182bb.transition(300);
        if (_0x27428c < (_0x2d1814 - parseInt(_0x328378)) / 2) _0x4182bb.transform("translate3d(0px,0px,0px)");else _0x27428c > _0x14ad9a - (parseInt(_0x328378) + _0x2d1814) / 2 ? _0x4182bb.transform("translate3d(" + (_0x2d1814 - _0x14ad9a) + "px,0px,0px)") : _0x4182bb.transform("translate3d(" + ((_0x2d1814 - parseInt(_0x328378)) / 2 - _0x27428c) + "px,0px,0px)");
      }
    },
    "Slide": function () {
      new Swiper(".slide-swiper", {
        "autoplay": true,
        "loop": true,
        "slidesPerView": 1
      });
      new Swiper(".mySwiper", {
        "loop": true,
        "autoplay": true,
        "clickable": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        }
      });
      new Swiper(".slide-swiper2", {
        "autoplay": {
          "disableOnInteraction": false
        },
        "loop": true,
        "slidesPerView": 1,
        "on": {
          "init": function () {
            let _0x136383 = $(".lazy-p").eq(1).css("backgroundImage");
            $(".slide-time-ios").css("backgroundImage", _0x136383);
          },
          "slideChangeTransitionEnd": function () {
            let _0x248514 = $(".lazy-p").eq(this.realIndex - 1).css("backgroundImage");
            $(".slide-time-ios").css("backgroundImage", _0x248514);
          }
        }
      });
    },
    "Roll": function () {
      new Swiper(".roll", {
        "paginationClickable": true,
        "slidesPerView": "auto"
      });
    }
  },
  "Actor": {
    "Detail": function () {
      new Swiper(".list-swiper", {
        "slidesPerView": 3,
        "slidesPerGroup": 3,
        "observer": true,
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        },
        "breakpoints": {
          1934: {
            "slidesPerView": 8,
            "slidesPerGroup": 8
          },
          1691: {
            "slidesPerView": 7,
            "slidesPerGroup": 7
          },
          767: {
            "freeMode": true,
            "slidesPerView": "auto",
            "slidesPerGroup": 1
          }
        }
      });
      let _0x2b04a6 = $(".star-works .actor-api");
      if (_0x2b04a6.length > 0) {
        if ($(".star-works .public-list-box").length > 0) {
          _0x4050cc($(".star-active").attr("data-actor"));
        } else $(".star-works").hide();
      }
      $(".star-works-top .public-list-box").click(function () {
        $(this).addClass("star-active").siblings().removeClass("star-active");
        _0x4050cc($(this).attr("data-actor"));
      });
      function _0x4050cc(_0x2f9d62) {
        let _0xa3527 = "";
        for (let _0x3f4504 = 0; _0x3f4504 < 9; _0x3f4504++) {
          _0xa3527 = _0xa3527 + "<div class=\"public-list-box public-pic-b swiper-slide\"><div class=\"public-list-div\">" + "<a class=\"public-list-exp\"><div class=\"lazy box\"><span class=\"loadIcon spin-dot-spin\"><i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i>" + "<i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i></span></div></a></div><div class=\"public-list-button\"><a class=\"time-title box radius\"></a>" + "</div></div>";
        }
        _0x2b04a6.html(_0xa3527);
        EC.Ajax(maccms.path + "/index.php/api/actor_vod_api?name=" + _0x2f9d62, "get", "json", "", function (_0xf79a9e) {
          if (Number(_0xf79a9e.code) === 1) {
            _0xa3527 = "";
            $.each(_0xf79a9e.list, function (_0x21a332, _0xe02cf7) {
              _0xa3527 = _0xa3527 + "    <div class=\"public-list-box public-pic-" + _0xf79a9e.ajax.vod_pic + " swiper-slide\">\n" + "        <div class=\"public-list-div public-list-bj\">\n" + "            <a" + HTML.Target(_0xf79a9e.ajax.vod_target) + " class=\"public-list-exp\" href=\"" + _0xe02cf7.url + "\">\n" + "                <img referrerpolicy=\"no-referrer\" class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" alt=\"" + _0xe02cf7.name + "\" data-src=\"" + _0xe02cf7.pic + "\" />" + "                <span class=\"public-bg\"></span>\n" + "                <span class=\"public-play\"><i class=\"fa\">&#xe593;</i></span>\n" + "            </a>\n" + "        </div>\n" + "        <div class=\"public-list-button\"><a" + HTML.Target(_0xf79a9e.ajax.vod_target) + " class=\"time-title ft4 hide\" href=\"" + _0xe02cf7.url + "\" title=\"" + _0xe02cf7.name + "\">" + _0xe02cf7.name + "</a></div>" + "    </div>";
            });
            _0x2b04a6.html(_0xa3527);
            EC.Init.LazyLoad.update();
            $(".lang-bnt").length === 1 && zh_tranBody();
          } else _EC.Pop.Msg(language["39"], "", "error");
        });
      }
    }
  },
  "Pop": {
    "Uid": "DCC147D11943AF75",
    "Drawer": function (_0x4e991a, _0x5ce263) {
      if ($(".drawer-list").length > 0) {
        _EC.Pop.Msg(language["40"], "", "error");
        return;
      }
      $("body").append("<div class=\"drawer-list\"><div class=\"drawer-list-bg box-bg ease\" style=\"display:none\"></div><div class=\"drawer-list-box bj3\"></div></div>");
      $(".drawer-list-box").html(_0x4e991a);
      _0x5ce263();
      setTimeout(function () {
        $(".drawer-list-bg").css({
          "display": "block"
        });
        $("body").css({
          "height": "100%",
          "width": "100%",
          "overflow": "hidden"
        });
        $(".drawer-list").addClass("drawer-show");
      }, 0);
      $(".drawer-list-bg").on("click", function () {
        EC.Pop.DrawerDel();
      }).on("touchmove", function () {
        EC.Pop.DrawerDel();
      });
    },
    "DrawerDel": function () {
      $(".drawer-list-box").addClass("drawer-out");
      $("body").css({
        "height": "",
        "width": "",
        "overflow": ""
      });
      $(".drawer-list-bg").css({
        "display": "none"
      });
      setTimeout(function () {
        $(".drawer-list").remove();
      }, 100);
    },
    "Show": function (_0x902eb8, _0x2e8ccc, _0x1c4ae9) {
      Number($(".window").length) !== 1 && EC.Pop.RemoveWin();
      $("body").append("<div class=\"window\"><div class=\"box-bg\"></div><div class=\"window-box\"><div class=\"topfadeInUp animated bj3 cor4\"><div class=\"window-title rel\"><h2 class=\"subscript ft6 br\"></h2><a class=\"window-off fa ds-guanbi\"></a></div><div class=\"window-content\"></div></div></div></div>");
      $(".window .subscript").html(_0x2e8ccc);
      $(".window-content").html(_0x902eb8);
      $(".window-box").addClass("window-show");
      $(document).on("click", ".box-bg", function () {
        $(this).parent().remove();
      });
      $(document).on("click", ".window-off", function () {
        $(this).parent().parent().parent().parent().remove();
      });
      _0x1c4ae9();
    },
    "RemoveWin": function () {
      $(".window").remove();
    }
  },
  "Toggle": function () {
    $(".switch-button a").click(function () {
      $(this).addClass("selected").siblings().removeClass("selected");
      let _0xff6757 = $(".switch-button a").index(this),
        _0x3e138e = $(".switch-box .check").eq(_0xff6757);
      _0x3e138e.fadeIn(800).siblings().hide();
      _0x3e138e.addClass("selected").siblings().removeClass("selected");
    });
  },
  "player": {
    "player_jx": function (_0x438089, _0x3170a5) {
      let _0x2d8095 = {},
        _0x1ac1bf = _0x438089.split("#");
      for (let _0xad31de = 0; _0xad31de < _0x1ac1bf.length; _0xad31de++) {
        let _0x34b0a6 = _0x1ac1bf[_0xad31de].split("$"),
          _0x21d63f = _0x34b0a6[1].split(",");
        for (let _0x46ff3e = 0; _0x46ff3e < _0x21d63f.length; _0x46ff3e++) {
          if (_0x2d8095.hasOwnProperty(_0x21d63f[_0x46ff3e])) {
            _0x2d8095[_0x21d63f[_0x46ff3e]][Object.keys(_0x2d8095[_0x21d63f[_0x46ff3e]]).length] = {
              "name": _0x34b0a6[0],
              "api": _0x34b0a6[2]
            };
          } else _0x2d8095[_0x21d63f[_0x46ff3e]] = {
            0: {
              "name": _0x34b0a6[0],
              "api": _0x34b0a6[2]
            }
          };
        }
      }
      let _0x1c9f2c = "";
      for (let _0x3beac5 in _0x2d8095) {
        if (_0x3beac5 == _0x3170a5) {
          let _0x4e5d8c = _0x2d8095[_0x3beac5];
          for (let _0x383f51 = 0; _0x383f51 < Object.keys(_0x4e5d8c).length; _0x383f51++) {
            !EC.Empty(maccms.jx_index) && _0x383f51 == maccms.jx_index ? _0x1c9f2c = _0x1c9f2c + "<a class=\"box radius hide border bj2\" href=\"javascript:\" data-api=\"" + _0x4e5d8c[_0x383f51].api + "\">" + _0x4e5d8c[_0x383f51].name + "</a>" : _0x1c9f2c = _0x1c9f2c + "<a class=\"box radius hide border\" href=\"javascript:\" data-api=\"" + _0x4e5d8c[_0x383f51].api + "\">" + _0x4e5d8c[_0x383f51].name + "</a>";
          }
        }
      }
      _0x1c9f2c.length > 1 && $(".line-switch").html(_0x1c9f2c);
    }
  },
  "User": {
    "BoxShow": 0,
    "IsLogin": 0,
    "Init": function () {
      !EC.Empty(EC.Cookie.Get("user_id")) && (EC.User.IsLogin = 1);
      $(document).on("click", ".head-user", function () {
        if (EC.Empty(EC.Cookie.Get("user_id"))) EC.User.Login();else {
          window.location.href = $(this).attr("data-url");
        }
      });
      $(document).on("click", ".head-user-out", function () {
        EC.User.Logout();
      });
    },
    "Login": function () {
      EC.Ajax(maccms.path + "/index.php/user/ajax_login", "post", "json", "", function (_0x46d169) {
        EC.Pop.Show(_0x46d169, language["41"], function () {
          $("body").on("click", "#wp-submit", function () {
            $(this).unbind("click");
            EC.Ajax(maccms.path + "/index.php/user/login", "post", "json", $(".login-form").serialize(), function (_0x14cf28) {
              _EC.Pop.Msg(_0x14cf28.msg, "", "error");
              Number(_0x14cf28.code) === 1 && location.reload();
            });
          });
        });
      }, function () {
        _EC.Pop.Msg(language["42"], "", "error");
      });
    },
    "Logout": function () {
      $(this).unbind("click");
      EC.Ajax(maccms.path + "/index.php/user/logout", "post", "json", "", function (_0x1d424d) {
        _EC.Pop.Msg(_0x1d424d.msg);
        Number(_0x1d424d.code) === 1 && location.reload();
      });
    },
    "Collection": function () {
      $("body").on("click", ".collection", function () {
        if (Number(EC.User.IsLogin) === 0) {
          EC.User.Login();
          return;
        }
        let _0x40afa4 = $(this);
        _0x40afa4.attr("data-id") && EC.Ajax(maccms.path + "/index.php/user/ajax_ulog/?ac=set&mid=" + _0x40afa4.attr("data-mid") + "&id=" + _0x40afa4.attr("data-id") + "&type=" + _0x40afa4.attr("data-type"), "get", "json", "", function () {
          _EC.Pop.Msg(language["61"]);
        });
      });
    }
  },
  "Ulog": {
    "Init": function () {
      EC.Ulog.Set();
    },
    "Set": function () {
      let _0x44dad2 = $(".ds-log-set");
      _0x44dad2.attr("data-mid") && $.get(maccms.path + "/index.php/api/ulog/?ac=set&mid=" + _0x44dad2.attr("data-mid") + "&id=" + _0x44dad2.attr("data-id") + "&sid=" + _0x44dad2.attr("data-sid") + "&nid=" + _0x44dad2.attr("data-nid") + "&type=" + _0x44dad2.attr("data-type"));
    }
  },
  "Hits": {
    "Init": function () {
      let _0x20d608 = $(".ds-hits");
      if (Number(_0x20d608.length) === 0) return;
      EC.Ajax(maccms.path + "/index.php/ajax/hits?mid=" + _0x20d608.attr("data-mid") + "&id=" + _0x20d608.attr("data-id") + "&type=update", "get", "json", "", function (_0x4fdab6) {
        if (Number(_0x4fdab6.code) === 1) {
          $(".ds-hits").each(function (_0x57be89) {
            let _0x3a1a5a = $(".ds-hits").eq(_0x57be89).attr("data-type");
            if (_0x3a1a5a !== "insert") {
              $("." + _0x3a1a5a).html(eval("(r.data." + _0x3a1a5a + ")"));
            }
          });
        }
      });
    }
  },
  "Md5": function (_0x576ba6) {
    return hex_md5("DS" + _0x576ba6 + EC.Pop.Uid);
  },
  "Score": function () {
    let _0x1b655e = 0;
    $(document).on("click", "#rating li", function () {
      if (_0x1b655e > 0) _EC.Pop.Msg(language["43"]);else {
        let _0x1d4bb0 = $("#rating").data();
        EC.Ajax(maccms.path + "/index.php/ajax/score?mid=" + _0x1d4bb0.mid + "&id=" + _0x1d4bb0.id + "&score=" + $(this).attr("val") * 2, "post", "json", "", function (_0x58f7c7) {
          _EC.Pop.Msg(_0x58f7c7.msg);
          _0x1b655e = 1;
        }, function () {
          _EC.Pop.Msg(language["44"], "", "error");
        });
      }
      $(this).nextAll().removeClass("active");
      $(this).prevAll().addClass("active");
      $(this).addClass("active");
    });
  },
  "Suggest": {
    "Init": function (_0x526867, _0x2f1a25) {
      if (Number(maccms.so_off) === 1) {
        try {
          $(_0x526867).autocomplete(maccms.path + "/index.php/ajax/suggest?mid=" + _0x2f1a25, {
            "inputClass": "search-input",
            "resultsClass": "results",
            "loadingClass": "loading",
            "appendTo": ".completion",
            "minChars": 1,
            "matchSubset": 0,
            "cacheLength": 10,
            "multiple": false,
            "matchContains": true,
            "autoFill": false,
            "dataType": "json",
            "parse": function (_0x36b1ad) {
              if (Number(_0x36b1ad.code) === 1) {
                let _0x3a7fa8 = [];
                return $.each(_0x36b1ad.list, function (_0x344d8e, _0x29ac93) {
                  _0x29ac93.url = _0x36b1ad.url;
                  _0x3a7fa8[_0x344d8e] = {
                    "data": _0x29ac93
                  };
                }), _0x3a7fa8;
              } else return {
                "data": ""
              };
            },
            "formatItem": function (_0x1c3c92) {
              return _0x1c3c92.name;
            },
            "formatResult": function (_0x5889ce) {
              return _0x5889ce.text;
            }
          }).result(function (_0x46eb0e, _0x1fcae6) {
            $(_0x526867).val(_0x1fcae6.name);
            let _0x8fd21e = _0x1fcae6.url.replace("mac_wd", encodeURIComponent(_0x1fcae6.name));
            EC.Records.Set(_0x1fcae6.name, _0x8fd21e);
            location.href = _0x8fd21e;
          });
        } catch (_0x533245) {}
      }
    }
  },
  "History": {
    "BoxShow": 0,
    "Limit": 30,
    "Days": 7,
    "Json": "",
    "Msg": "<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/Streamlab/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["45"] + "</span></div>",
    "Init": function () {
      let _0x37a7ec = [];
      if (this.Json) {
        _0x37a7ec = this.Json;
      } else {
        let _0x5d684b = EC.Cookie.Get("mac_history");
        !EC.Empty(_0x5d684b) && (_0x37a7ec = eval(_0x5d684b));
      }
      let _0x219e5a = "";
      if (_0x37a7ec.length > 0) {
        for (let _0x3a28c7 = 0; _0x3a28c7 < _0x37a7ec.length; _0x3a28c7++) {
          _0x219e5a += "<li><a class=\"history-a flex\" href=\"" + _0x37a7ec[_0x3a28c7].link + "\" target=\"video\" title=\"" + _0x37a7ec[_0x3a28c7].name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x37a7ec[_0x3a28c7].name + "\" data-src=\"" + _0x37a7ec[_0x3a28c7].pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x37a7ec[_0x3a28c7].name + "</div><div><span class=\"cor5\">" + _0x37a7ec[_0x3a28c7].mid + "</span></div></div></a></li>";
        }
      } else _0x219e5a += this.Msg;
      $(".locality-history ul").html(_0x219e5a);
      $("#l_history").click(function () {
        EC.History.Clear();
      });
      let _0x2cdf8d = $(".ds-history-set");
      if (_0x2cdf8d.attr("data-name")) {
        EC.History.Set(_0x2cdf8d.attr("data-name"), _0x2cdf8d.attr("data-link"), _0x2cdf8d.attr("data-pic"), _0x2cdf8d.attr("data-mid"));
      }
    },
    "Set": function (_0x4d2dbd, _0x83e2a3, _0x4e03cf, _0x5d65de) {
      !_0x83e2a3 && (_0x83e2a3 = document.URL);
      let _0x27a975 = EC.Cookie.Get("mac_history"),
        _0x2172a0 = "";
      if (!EC.Empty(_0x27a975)) {
        this.Json = eval(_0x27a975);
        for (let _0x43a1ec = 0; _0x43a1ec < this.Json.length; _0x43a1ec++) {
          if (this.Json[_0x43a1ec].link === _0x83e2a3) return false;
        }
        _0x2172a0 = "{log:[{\"name\":\"" + _0x4d2dbd + "\",\"link\":\"" + _0x83e2a3 + "\",\"pic\":\"" + _0x4e03cf + "\",\"mid\":\"" + _0x5d65de + "\"},";
        for (let _0x195100 = 0; _0x195100 < this.Json.length; _0x195100++) {
          if (_0x195100 <= this.Limit && this.Json[_0x195100]) {
            let _0x11eb15 = this.Json[_0x195100].name;
            if (_0x11eb15 === _0x4d2dbd) {} else _0x2172a0 += "{\"name\":\"" + this.Json[_0x195100].name + "\",\"link\":\"" + this.Json[_0x195100].link + "\",\"pic\":\"" + this.Json[_0x195100].pic + "\",\"mid\":\"" + this.Json[_0x195100].mid + "\"},";
          } else break;
        }
        _0x2172a0 = _0x2172a0.substring(0, _0x2172a0.lastIndexOf(","));
        _0x2172a0 += "]}";
      } else _0x2172a0 = "{log:[{\"name\":\"" + _0x4d2dbd + "\",\"link\":\"" + _0x83e2a3 + "\",\"pic\":\"" + _0x4e03cf + "\",\"mid\":\"" + _0x5d65de + "\"}]}";
      this.Json = eval(_0x2172a0);
      EC.Cookie.Set("mac_history", _0x2172a0, this.Days);
    },
    "Clear": function () {
      EC.Cookie.Del("mac_history");
      $(".locality-history ul").html(this.Msg);
    }
  },
  "Records": {
    "Limit": 8,
    "Days": 7,
    "Json": "",
    "Init": function () {
      EC.Records.Click();
      let _0x4e6ac4 = [];
      if (this.Json) _0x4e6ac4 = this.Json;else {
        let _0x4160f0 = EC.Cookie.Get("DS_Records");
        !EC.Empty(_0x4160f0) && (_0x4e6ac4 = eval(_0x4160f0));
      }
      if (_0x4e6ac4.length > 0) {
        let _0x44eb38 = "";
        for (let _0x542fcc = 0; _0x542fcc < _0x4e6ac4.length; _0x542fcc++) {
          _0x44eb38 += "<a href=\"" + _0x4e6ac4[_0x542fcc].url + "?wd=" + _0x4e6ac4[_0x542fcc].name + "\" class=\"public-list-b bj border\">" + _0x4e6ac4[_0x542fcc].name + "</a>";
        }
        $(".records-list").html(_0x44eb38);
      } else $(".records-list").html("<span class=\"cor5\">" + language["46"] + "</span>");
      $(document).on("click", "#re_del", function () {
        EC.Records.Clear();
      });
    },
    "Set": function (_0x4058b3, _0x598957) {
      let _0x43e451 = EC.Cookie.Get("DS_Records"),
        _0x31d34c = {};
      if (!EC.Empty(_0x43e451)) {
        this.Json = eval(_0x43e451);
        for (let _0x33d662 = 0; _0x33d662 < this.Json.length; _0x33d662++) {
          if (this.Json[_0x33d662].name === _0x4058b3) {
            return false;
          }
        }
        _0x31d34c = "{log:[{\"name\":\"" + _0x4058b3 + "\",\"url\":\"" + _0x598957 + "\"},";
        for (let _0x49b31b = 0; _0x49b31b < this.Json.length; _0x49b31b++) {
          if (_0x49b31b <= this.Limit && this.Json[_0x49b31b]) {
            let _0x4e16be = this.Json[_0x49b31b].name;
            if (_0x4e16be === _0x4058b3) {} else {
              _0x31d34c += "{\"name\":\"" + this.Json[_0x49b31b].name + "\",\"url\":\"" + this.Json[_0x49b31b].url + "\"},";
            }
          } else break;
        }
        _0x31d34c = _0x31d34c.substring(0, _0x31d34c.lastIndexOf(","));
        _0x31d34c += "]}";
      } else {
        _0x31d34c = "{log:[{\"name\":\"" + _0x4058b3 + "\",\"url\":\"" + _0x598957 + "\"}]}";
      }
      this.Json = eval(_0x31d34c);
      EC.Cookie.Set("DS_Records", _0x31d34c, this.Days);
    },
    "Clear": function () {
      EC.Cookie.Del("DS_Records");
      $(".records-list").html("<span class=\"cor5\">" + language["47"] + "</span>");
    },
    "Click": function () {
      $(".select-name").click(function () {
        $(this).attr("data-id") === "1" ? ($(this).attr("data-id", "0").children().html("&#xe564;"), $(".select-list").show()) : ($(this).attr("data-id", "1").children().html("&#xe563;"), $(".select-list").hide());
      });
      $(".select-list a").click(function () {
        let _0x4c0fda = $(this).data();
        $(".select-name").html(_0x4c0fda.name + "<i class=\"fa cor4\">&#xe563;</i>").attr("data-id", "1");
        $("#search").attr("action", _0x4c0fda.url);
        $(".select-list").hide();
      });
      $(".search-input-sub").click(function () {
        let _0x5bbcc4 = $(".search-input").val(),
          _0x5764b5 = $("#search").attr("action");
        if (EC.Empty(_0x5bbcc4)) event.preventDefault(), _EC.Pop.Msg(language["48"], "", "error");else {
          if ($(".lang-bnt").length === 1) {
            const _0xf285ed = transChinese(_0x5bbcc4);
            $(".search-input").val(_0xf285ed);
            _0x5bbcc4 = _0xf285ed;
          }
          EC.Records.Set(_0x5bbcc4, _0x5764b5);
        }
      });
    }
  },
  "Remaining": function (_0x17a7a5, _0x1da2b3, _0x1860be) {
    let _0xd2309b = _0x1da2b3 - $(_0x17a7a5).val().length;
    _0xd2309b < 0 && (_0xd2309b = 0, $(_0x17a7a5).val($(_0x17a7a5).val().substr(0, 200)));
    $(_0x1860be).text(_0xd2309b);
  },
  "Digg": function () {
    $("body").on("click", ".digg-link", function () {
      let _0xceadb0 = $(this);
      _0xceadb0.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/digg.html?mid=" + _0xceadb0.attr("data-mid") + "&id=" + _0xceadb0.attr("data-id") + "&type=" + _0xceadb0.attr("data-type"), "get", "json", "", function (_0x4197df) {
        _0xceadb0.addClass("disabled");
        Number(_0x4197df.code) === 1 ? _0xceadb0.attr("data-type") === "up" ? _0xceadb0.find(".digg-num").html(_0x4197df.data.up) : _0xceadb0.find(".digg-num").html(_0x4197df.data.down) : _EC.Pop.Msg(_0x4197df.msg);
      });
    });
  },
  "Gbook": {
    "Login": 0,
    "Verify": 0,
    "Init": function () {
      let _0x3539da = $(".gbook-form").data();
      EC.Gbook.Login = _0x3539da.login;
      EC.Gbook.Verify = _0x3539da.verify;
      let _0x57f57b = $("body");
      _0x57f57b.on("keyup", ".gbook-content", function () {
        EC.Remaining($(this), 200, ".gbook_remaining");
      });
      _0x57f57b.on("focus", ".gbook-content", function () {
        Number(EC.Gbook.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0x57f57b.on("click", ".gbook-submit", function () {
        EC.Gbook.Submit();
      });
    },
    "Show": function (_0x28a878) {
      EC.Ajax(maccms.path + "/index.php/gbook/index?page=" + _0x28a878, "post", "json", "", function (_0x4f4837) {
        $(".mac_gbook_box").html(_0x4f4837);
      }, function () {
        $(".mac_gbook_box").html(language["49"]);
      });
    },
    "Submit": function () {
      if (EC.Empty($(".gbook-content").val())) return _EC.Pop.Msg(language["50"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/gbook/saveData", "post", "json", $(".gbook-form").serialize(), function (_0x1a629a) {
        _EC.Pop.Msg(_0x1a629a.msg);
        Number(_0x1a629a.code) === 1 ? location.reload() : Number(EC.Gbook.Verify) === 1 && EC.Verify.Refresh();
      });
    },
    "Tg": function () {
      if (EC.Empty($(".tg-content").val())) {
        return _EC.Pop.Msg(language["51"], "", "error"), false;
      }
      EC.Ajax(maccms.path + "/index.php/api/tougao", "post", "json", $(".tg-form").serialize(), function (_0x57b986) {
        _EC.Pop.Msg(_0x57b986.msg);
        Number(_0x57b986.code) === 1 ? location.reload() : EC.Verify.Refresh();
      });
    },
    "Report": function (_0x54b343) {
      EC.Ajax(maccms.path + "/index.php/gbook/report.html?id=" + _0x54b343.id + "&name=" + encodeURIComponent(_0x54b343.url + location.href), "post", "json", "", function (_0x3b262c) {
        EC.Pop.Show(_0x3b262c, language["52"], function () {
          let _0x3ef82f = $(".gbook-form").data();
          EC.Gbook.Login = _0x3ef82f.login;
          EC.Gbook.Verify = _0x3ef82f.verify;
          EC.Gbook.Init();
        });
      }, function () {
        _EC.Pop.Msg(language["49"], "", "error");
      });
    }
  },
  "Comment": {
    "Login": 0,
    "Verify": 0,
    "Init": function () {
      let _0x17e77a = $("body");
      _0x17e77a.on("click", ".comment-face-box img", function () {
        let _0x496bd8 = $(this).parent().parent().parent().parent().find(".comment-content");
        $(_0x496bd8).val($(_0x496bd8).val() + "[em:" + $(this).attr("data-id") + "]");
      });
      _0x17e77a.on("click", ".comment-face-panel", function () {
        $(this).parent().parent().find(".comment-face-box").fadeToggle();
      });
      _0x17e77a.on("click", ".face-close", function () {
        $(".comment-face-box").hide();
      });
      _0x17e77a.on("click", ".comment-page", function () {
        EC.Comment.Show($(this).attr("data-page"));
      });
      _0x17e77a.on("keyup", ".comment-content", function () {
        EC.Remaining($(this), 200, $(".comment-remaining"));
      });
      _0x17e77a.on("focus", ".comment-content", function () {
        Number(EC.Comment.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0x17e77a.on("click", ".comment-report", function () {
        let _0x4167da = $(this);
        $(this).attr("data-id") && EC.Ajax(maccms.path + "/index.php/comment/report.html?id=" + _0x4167da.attr("data-id"), "get", "json", "", function (_0x1a01a6) {
          _0x4167da.addClass("disabled");
          _EC.Pop.Msg(language["53"], "", "success");
        });
      });
      _0x17e77a.on("click", ".comment-reply-button", function () {
        let _0x283506 = $(this);
        if (_0x283506.attr("data-id")) {
          let _0x3d4b33 = _0x283506.html();
          $(".comment-reply-form").remove();
          if (_0x3d4b33 === language["54"]) return _0x283506.html("&#xe573;"), false;
          let _0x524434 = $(".comment-form").prop("outerHTML"),
            _0x3f1403 = $(_0x524434);
          _0x3f1403.addClass("comment-reply-form");
          _0x3f1403.find("input[name=\"comment_pid\"]").val(_0x283506.attr("data-id"));
          _0x283506.parent().parent().after(_0x3f1403);
          $(".comment-reply-button").html("&#xe573;");
          _0x283506.html(language["54"]);
        }
      });
      _0x17e77a.on("click", ".comment-submit", function () {
        let _0x4bdc85 = $(this);
        EC.Comment.Submit(_0x4bdc85);
      });
    },
    "Show": function (_0x33c34d) {
      let _0x274d86 = $(".ds-comment");
      _0x274d86.length > 0 && EC.Ajax(maccms.path + "/index.php/comment/ajax.html?rid=" + _0x274d86.attr("data-id") + "&mid=" + _0x274d86.attr("data-mid") + "&page=" + _0x33c34d, "get", "json", "", function (_0x4167f6) {
        $(".ds-comment").html(_0x4167f6);
        $(".lang-bnt").length === 1 && zh_tranBody();
      }, function () {
        _EC.Pop.Msg(language["49"], "", "error");
      });
    },
    "Submit": function (_0x3743d2) {
      let _0x3224e8 = _0x3743d2.parents("form");
      if ($(_0x3224e8).find(".comment-content").val() === "") return _EC.Pop.Msg(language["55"], "", "error"), false;
      let _0x14e9a3 = $(".ds-comment").data();
      if (EC.Empty(_0x14e9a3.mid)) return _EC.Pop.Msg(language["56"], "", "error"), false;
      if (EC.Empty(_0x14e9a3.id)) {
        return _EC.Pop.Msg(language["57"], "", "error"), false;
      }
      EC.Ajax(maccms.path + "/index.php/comment/saveData", "post", "json", $(_0x3224e8).serialize() + "&comment_mid=" + _0x14e9a3.mid + "&comment_rid=" + _0x14e9a3.id, function (_0x87c0bc) {
        _EC.Pop.Msg(_0x87c0bc.msg);
        Number(_0x87c0bc.code) === 1 ? EC.Comment.Show(1) : Number(EC.Comment.Verify) === 1 && EC.Verify.Refresh();
      });
    }
  },
  "Verify": {
    "Init": function () {
      EC.Verify.Click();
      $(".verify-submit").click(function () {
        let _0x439efc = $("input[name=\"verify\"]").val();
        EC.Ajax(maccms.path + "/index.php/ajax/verify_check?type=" + $(this).data("type") + "&verify=" + _0x439efc, "post", "json", "", function (_0x2e97bd) {
          Number(_0x2e97bd.code) === 1 ? location.reload() : (_EC.Pop.Msg(_0x2e97bd.msg), EC.Verify.Refresh());
        }, function () {
          _EC.Pop.Msg(language["58"], "", "error");
          EC.Verify.Refresh();
        });
      });
    },
    "Click": function () {
      $("body").on("click", "img.ds-verify-img", function () {
        $(this).attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
      });
    },
    "Refresh": function () {
      $(".ds-verify-img").attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
    },
    "Show": function () {
      return "<img class=\"ds-verify-img\" src=\"" + maccms.path + "/index.php/verify/index.html?\" alt=\"" + language["19"] + "\" title=\"" + language["59"] + "\">";
    }
  },
  "QiAnDao": {
    "Fun": function (_0x1f3aa9) {
      let _0x301fc6 = $("#qiAnDao-list"),
        _0x2da05f = "",
        _0x8e188a = new Date(),
        _0x5a315e = new Date(_0x8e188a.getFullYear(), parseInt(_0x8e188a.getMonth()), 1).getDay(),
        _0x432a90 = new Date(_0x8e188a.getFullYear(), parseInt(_0x8e188a.getMonth() + 1), 0),
        _0x525f56 = _0x432a90.getDate();
      $(".qiAnDao-bj").text(_0x8e188a.getMonth() + 1);
      for (let _0x3394cb = 0; _0x3394cb < 42; _0x3394cb++) {
        _0x2da05f += "<li></li>";
      }
      _0x301fc6.html(_0x2da05f);
      let _0x5c7e38 = _0x301fc6.find("li");
      for (let _0x1d1eaf = 0; _0x1d1eaf < _0x525f56; _0x1d1eaf++) {
        let _0x1c27d9 = parseInt(_0x1d1eaf + 1);
        _0x5c7e38.eq(_0x1d1eaf + _0x5a315e).html("<em>" + _0x1c27d9 + "</em>").addClass("date" + _0x1c27d9);
        if (_0x1f3aa9.length > 0) {
          for (let _0x3bbd17 = 0; _0x3bbd17 < _0x1f3aa9.length; _0x3bbd17++) {
            _0x1c27d9 === _0x1f3aa9[_0x3bbd17] && _0x5c7e38.eq(_0x1d1eaf + _0x5a315e).addClass("nav-dt");
          }
        }
      }
      $(".qiAnDao-con").after("<style>#qiAnDao-list li:nth-child(n+" + (_0x525f56 + _0x5a315e + 1) + ") {display: none}</style>").addClass("qiAnDao-show");
      $(".date" + _0x8e188a.getDate() + ":not(.nav-dt)").addClass("able-qiAnDao");
      $(".qiAnDao-top,.able-qiAnDao").click(function () {
        EC.Ajax(maccms.path + "/index.php/qian/sign", "get", "json", "", function (_0x588c45) {
          if (Number(_0x588c45.code) === 0) {
            _EC.Pop.Msg(_0x588c45.msg, "", "error");
          } else _EC.Pop.Msg(language["60"] + _0x588c45.reward, "", "success"), $(".able-qiAnDao").addClass("nav-dt"), $(".qiAnDao-top").addClass("nav-dt");
        }, function () {
          _EC.Pop.Msg(r.msg, "", "error");
        });
      });
      $(".qiAnDao-gz-bnt").click(function () {
        $(".qiAnDao-bottom").show();
      });
      $(".qiAnDao-bottom a").click(function () {
        $(".qiAnDao-bottom").hide();
      });
      $(".qiAnDao-gz-off").click(function () {
        $(".qiAnDao-con").hide();
      });
    },
    "Init": function () {
      $(".qiAnDao_bnt").click(function () {
        if (Number(EC.User.IsLogin) === 0) {
          EC.User.Login();
          return;
        }
        Number($(".qiAnDao-show").length) === 0 ? ($("#qiAnDao_2,.qiAnDao-top").hide(), $("#qiAnDao_1,.qiAnDao-con").show(), EC.Ajax(maccms.path + "/index.php/qian/days", "get", "json", "", function (_0x40a294) {
          Number(_0x40a294.code) === 1 ? (EC.QiAnDao.Fun(_0x40a294.data), setTimeout(function () {
            $("#qiAnDao_2,.qiAnDao-top").show();
            $("#qiAnDao_1").hide();
          }, 1000)) : ($(".qiAnDao-con").hide(), _EC.Pop.Msg(_0x40a294.msg, "", "error"));
        }, function () {
          $("#qiAnDao_1").html(language["42"]);
        })) : $(".qiAnDao-show").show();
      });
    }
  }
};
$(function () {
  EC.Style.Init();
  EC.Init();
  EC.Verify.Init();
  EC.User.Init();
  EC.Records.Init();
  EC.Suggest.Init(".mac_wd", 1, "");
  EC.History.Init();
  EC.Digg();
  EC.Score();
  EC.Copy.Init();
  EC.User.Collection();
  EC.Ulog.Init();
  EC.Hits.Init();
  EC.Toggle();
  EC.QiAnDao.Init();
});