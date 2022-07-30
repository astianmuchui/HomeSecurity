<?php
    // Emailing file.
    class mail{
        
        private $name = "MD1507";
        private $sender = "mail@gmail.com";
        private $recepient;
        private $message;
        protected $headers;
        private $subject;
        private $additional_headers;
        
        private function smtpMail($sender,$recepient,$message,$headers,$subject){
            $sender = $this->sender;
            $recepient = $this->recepient;
            $message = $this->message;
            $subject = $this->subject;
            
            $this->additional_headers = "MIME-Version: 1.0" ."\r\n";
            $this->additional_headers .="Content-Type:text/html;charset=UTF-8" . "\r\n";
            $this->headers = "From: " .$this->name. "<".$this->sender.">". "\r\n";
        
            if(filter_var($sender,FILTER_VALIDATE_EMAIL) == true && filter_var($recepient,FILTER_VALIDATE_EMAIL == true)){
                try{                
                if(mail($this->recepient,$this->subject,$this->message,$this->headers)){
                    return 1;   
                }else{
                    return 0;
                }
            }catch(Throwable $th){
                return $th;
            }
            }
        }
    }   
?>
