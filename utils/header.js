const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdXNxc3pmZHByZ2d5dmtpY2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NTksImV4cCI6MjA0MzM3ODY1OX0.lhkOCvXTMIL_TYGxZZVPQSJ9hvfBypsk-a3HtOolX9Y"


export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}