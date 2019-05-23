$.fn.TableScroll = function () {
  return this.each(function () {
    var $table = $(this);
    var tableWidth = $table.width();
    var $scroller = $('<div class="mirror"><div class="scroll-wrapper"><div class="scrubber"></div></div></div>');
    var $scrubber = $scroller.find(".scrubber");
    $table.wrap('<div class="table-wrapper scroll-start"><div class="scroll-wrapper"></div></div>');
    var $scrollerWrapper = $scrubber.parent();
    var $tableWrapper = $table.parent();
    var $container = $table.closest(".table-wrapper");

    $scroller.insertBefore($container);
    $scrubber.css("width", tableWidth);


    $scrollerWrapper.on("scroll", function () {
      var offset = $scrollerWrapper.scrollLeft();
      var distance = Math.floor($scrubber.width() - $scrollerWrapper.width());
      //console.log($scrollerWrapper);
      $tableWrapper.scrollLeft(offset);

      if (offset < 1) {
        // at start
        console.log("at start");
        $container.addClass("scroll-start");
      } else if (Math.floor(offset) == distance) {
        // at end
        console.log("at end");
        $container.addClass("scroll-end");
      } else {
        console.log("in between");
        $container.removeClass("scroll-start scroll-end");
      }
    });

    $tableWrapper.on("scroll", function () {
      var offset = $tableWrapper.scrollLeft();
      var distance = Math.floor($tableWrapper.width() - $tableWrapper.width());
      //console.log($scrollerWrapper);
      $scrollerWrapper.scrollLeft($tableWrapper.scrollLeft());
      //console.log($tableWrapper.scrollLeft());
      if (offset < 1) {
        // at start
        console.log("at start");
        $container.addClass("scroll-start");
      } else if (Math.floor(offset) == distance) {
        // at end
        console.log("at end");
        $container.addClass("scroll-end");
      } else {
        console.log("in between");
        $container.removeClass("scroll-start scroll-end");
      }
    });
  });
};

$("table").TableScroll();
/*
                          $("table").each(function(){
                            var $table = $(this);
                            var tableWidth = $table.width();
                            var $scroller = $('<div class="mirror"><div class="scroll-wrapper"><div class="scrubber"></div></div></div>');
                            var $scrubber = $scroller.find(".scrubber");
                              $table.wrap('<div class="table-wrapper scroll-start"><div class="scroll-wrapper"></div></div>');
                            var $scrollerWrapper = $scrubber.parent();
                            var $tableWrapper = $table.parent();
                            var $container = $table.closest(".table-wrapper");
                          
                            $scroller.insertBefore($container);
                            $scrubber.css("width", tableWidth);
                          
                            
                            $scrollerWrapper.on("scroll", function(){
                              var offset = $scrollerWrapper.scrollLeft();
                              var distance = Math.floor($scrubber.width() - $scrollerWrapper.width());
                              //console.log($scrollerWrapper);
                              $tableWrapper.scrollLeft(offset);
                              
                              if(offset < 1){
                               // at start
                               console.log("at start");
                                $container.addClass("scroll-start");
                            } else if (Math.floor(offset) == distance){
                               // at end
                              console.log("at end");
                              $container.addClass("scroll-end");
                            } else {
                              console.log("in between");
                              $container.removeClass("scroll-start scroll-end");
                            }
                            });
                            
                            $tableWrapper.on("scroll", function(){
                              var offset = $tableWrapper.scrollLeft();
                              var distance = Math.floor($tableWrapper.width() - $tableWrapper.width());
                              //console.log($scrollerWrapper);
                              $scrollerWrapper.scrollLeft($tableWrapper.scrollLeft()); 
                              //console.log($tableWrapper.scrollLeft());
                               if(offset < 1){
                               // at start
                               console.log("at start");
                                $container.addClass("scroll-start");
                            } else if (Math.floor(offset) == distance){
                               // at end
                              console.log("at end");
                              $container.addClass("scroll-end");
                            } else {
                              console.log("in between");
                              $container.removeClass("scroll-start scroll-end");
                            }
                            });
                          });*/